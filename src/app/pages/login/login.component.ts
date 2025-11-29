import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);
  email = ''; senha = '';

  entrar() {
    if (this.auth.login(this.email, this.senha)) {
      this.router.navigate(['/']);
    } else {
      alert('Email ou senha inválidos!');
    }
  }
}