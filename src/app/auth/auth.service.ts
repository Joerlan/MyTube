import { AuthDTO } from './AuthDTO.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({ providedIn: "root" })
export class AuthService {

  constructor(public http: HttpClient) {

  }

  login(){}

  createUser(email: string, password: string){
    const auth: AuthDTO = {email: email, password: password};
    this.http.post("http://localhost:3000/api/users/signup", auth).subscribe(response => {
      console.log(response);
    });
  }

}
