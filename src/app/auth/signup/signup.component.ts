import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onSubmitForm(form: FormGroup){
    if(form.invalid){
      return;
    }
    this.authService.createUser(form.value.email, form.value.password);
  }
}
