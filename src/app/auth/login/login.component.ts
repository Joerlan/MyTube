import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(form: FormGroup){
    if(form.invalid){
      return;
  }



  }
}
