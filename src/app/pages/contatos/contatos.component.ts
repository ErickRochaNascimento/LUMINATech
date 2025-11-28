import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../../components/footer/footer.component"; // Importante para o formulário funcionar
import { HeaderComponent } from '../../components/header/header.component';
import { SalesDashboardComponent } from "../salesdashboard/salesdashboard.component";


@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule, FooterComponent, HeaderComponent, SalesDashboardComponent],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatoComponent {
  mensagem = {
    nome: '',
    email: '',
    texto: ''
  };

  enviarMensagem() {
    alert(`Obrigado, ${this.mensagem.nome}! Sua mensagem foi enviada com sucesso.`);
    // Aqui você conectaria com o backend futuramente
    this.mensagem = { nome: '', email: '', texto: '' }; // Limpa o form
  }
}