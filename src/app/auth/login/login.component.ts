import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService, private router: Router) { }

  onSubmitForm(form: FormGroup){
    if(form.invalid){
      return;
    }
    this.authService.login(form.value.email, form.value.password)
      .subscribe((isAuthenticated)=>{
        if(isAuthenticated){
          this.router.navigate(['/']);
        }
    });

  }
}
