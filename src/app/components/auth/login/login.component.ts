import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  formValue() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm);
  }
  get f ( ) {
    return this.loginForm.controls;
  }
  ngOnInit() {
  }

}
