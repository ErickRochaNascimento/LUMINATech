import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para pipes como 'currency'
import { RouterLink } from '@angular/router';   // <--- Importante para o botão funcionar
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CommonModule, RouterLink], // <--- Adicione RouterLink aqui
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
  @Input() produto!: Produto; // Recebe os dados do produto da Home
}