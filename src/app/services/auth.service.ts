import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'lumina_users';
  private sessionKey = 'lumina_session';
  
  // Signal para atualizar o Header automaticamente
  currentUser = signal<any>(this.getSession());

  constructor(private router: Router) {}

  // --- REGISTRO ---
  cadastrar(dados: any): boolean {
    const usuarios = this.getStoredUsers();
    
    if (usuarios.find((u: any) => u.email === dados.email)) {
      return false; // Email já existe
    }

    const novoUsuario = { ...dados, id: Date.now() }; // Gera ID único
    usuarios.push(novoUsuario);
    localStorage.setItem(this.usersKey, JSON.stringify(usuarios));
    return true;
  }

  // --- LOGIN ---
  login(email: string, pass: string): boolean {
    const usuarios = this.getStoredUsers();
    const user = usuarios.find((u: any) => u.email === email && u.senha === pass);

    if (user) {
      // Salva sessão sem a senha
      const { senha, ...sessao } = user;
      localStorage.setItem(this.sessionKey, JSON.stringify(sessao));
      this.currentUser.set(sessao);
      return true;
    }
    return false;
  }

  // --- LOGOUT ---
  logout() {
    localStorage.removeItem(this.sessionKey);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  // --- UTILS ---
  private getStoredUsers() {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]');
  }

  private getSession() {
    return JSON.parse(localStorage.getItem(this.sessionKey) || 'null');
  }
}