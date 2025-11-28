import { Injectable, inject } from '@angular/core'; // Adicione inject
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto, ProdutoResponse } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CardProdutoService {
  // Configuração correta da URL e injeção
  private apiUrl = 'https://dummyjson.com/products';
  private http = inject(HttpClient); 

  // Busca por categoria
  getProdutos(categoria: string): Observable<ProdutoResponse> {
    return this.http.get<ProdutoResponse>(`${this.apiUrl}/category/${categoria}`);
  }

  // Busca por ID (usado na página de detalhes)
  getProdutoById(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }
}