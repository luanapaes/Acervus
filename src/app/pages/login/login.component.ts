import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router)
  
  loginForm = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]), 
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  onSubmit(){
    if(this.loginForm.valid){
      this.router.navigate(['userdashboard'])
    } else{
      console.log("Não válido")
    }
  }

}
