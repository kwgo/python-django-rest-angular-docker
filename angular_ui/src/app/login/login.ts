import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService) { }

  onLogin() {
    this.errorMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Please fill out all fields.';
      return;
    }


    var user = {
      email: this.username,
      password: this.password
    }

    console.log("hhh")
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
