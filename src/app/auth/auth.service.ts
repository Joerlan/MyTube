import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { AuthDTO } from './AuthDTO.model';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const BACKEND_URL = environment.apiUrl + "/users"

@Injectable({ providedIn: "root" })
export class AuthService {

  private token: string;
  private tokenTimer: any;
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();

  constructor(public http: HttpClient, private router: Router) {}

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  getAuthStatus(){
    return this.isAuthenticated;
  }

  getToken(){
    return this.token;
  }

  login(email: string, password: string){
    const auth: AuthDTO = {email: email, password: password};
    console.log("AuthService:");
    this.http.post<{token: string, expiresInSec: number}>(BACKEND_URL + "/login", auth).subscribe(response => {
      this.token = response.token;
      this.isAuthenticated = true;
      const now = new Date();
      const expirationDate = new Date(now.getTime() + (response.expiresInSec * 1000));
      this.setAuthTimer(response.expiresInSec);
      console.log(expirationDate);
      this.saveAuthData(this.token, expirationDate);
      this.notifyAuthStatus();
    }, (err)=>{
      console.log(err);
      this.notifyAuthStatus();
    });
    return this.getAuthStatusListener();
  }

  logout(){
    this.isAuthenticated = false;
    this.token = null;
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
    this.notifyAuthStatus();
    this.router.navigate(['/']);
  }

  private notifyAuthStatus(){
    this.authStatusListener.next(this.isAuthenticated);
  }

  createUser(email: string, password: string){
    const auth: AuthDTO = {email: email, password: password};
    this.http.post(BACKEND_URL + "/signup", auth).subscribe(response => {
      console.log(response);
    });
  }

  private saveAuthData(token: string, expirationDate: Date){
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }

  private getAuthData(){
    const token = localStorage.getItem("token");
    const expiration = localStorage.getItem("expiration");
    return {
      token: token,
      expiration: new Date(expiration)
    }
  }

  authFromLocalStorage(){
    const authInformation = this.getAuthData();
    if(!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expiration.getTime() - now.getTime();
    if(expiresIn > 0){
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.notifyAuthStatus();
      this.setAuthTimer(expiresIn/1000);
    }
  }

  private setAuthTimer(expiresInSec: number){
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, expiresInSec * 1000);
  }

}
