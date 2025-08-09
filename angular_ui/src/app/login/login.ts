import { Component } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
//  imports: [FormsModule],

  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
 
    this.errorMessage = '';

    this.email = this.loginForm.get('email')?.value;
    this.password = this.loginForm.get('password')?.value;

    console.log('Email:', this.email);
    console.log('Password:', this.password);

    var user = {
      email: this.email,
      password: this.password
    }

    console.log(user)

    this.authService.login(user).subscribe({
      next: (res) => {
        console.log(res)
        if (res.access) {
          console.log("has access token")

          this.authService.saveTokens(res.access, res.refresh);
          window.location.href = '/member'; // Or use Angular Router
        } else {
          this.errorMessage = res.error || 'Invalid credentials.';
        }
      },
      error: () => {
        this.errorMessage = 'Error connecting to server.';
      }
    });
  }
}
