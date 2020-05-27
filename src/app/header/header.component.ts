import { AuthService } from './../auth/auth.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy{

  constructor(private authService: AuthService){}

  isAuthenticated = false;
  authStatusSubscription: Subscription;

  ngOnInit() {
    this.isAuthenticated = this.authService.getAuthStatus();
    this.authStatusSubscription = this.authService.getAuthStatusListener().subscribe((isAuthenticated)=>{
      this.isAuthenticated = isAuthenticated;
    });
  }

  ngOnDestroy() {
    if(this.authStatusSubscription){
      this.authStatusSubscription.unsubscribe();
    }
  }

  onLogout(){
    this.authService.logout();
  }



}
