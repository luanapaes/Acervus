import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
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
      console.log("Válido")
    } else{
      console.log("Não válido")
    }
  }

}
