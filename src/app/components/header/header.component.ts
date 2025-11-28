// src/app/components/header/header.component.ts
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importante para o input funcionar
import { Router, RouterLink } from '@angular/router'; // Para navegação

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink], // Adicione FormsModule aqui
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private router = inject(Router);
  termoBusca: string = '';

  pesquisar() {
    if (this.termoBusca.trim()) {
      // Navega para a página de busca enviando o termo na URL
      this.router.navigate(['/search'], { queryParams: { q: this.termoBusca } });
      this.termoBusca = ''; // Limpa o campo após pesquisar
    }
  }
}