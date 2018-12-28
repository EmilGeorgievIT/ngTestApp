import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) { }

  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });
  formValue() {
    const emailFiled = this.registerForm.value.email;
    const passField = this.registerForm.value.password;

    this.authService.register(emailFiled, passField);
  }
  ngOnInit() {
  }

}
