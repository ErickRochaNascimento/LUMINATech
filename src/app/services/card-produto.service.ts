import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos, ProdutosAPI } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CardProdutoService {

  private baseUrl = 'https://dummyjson.com/products/category/';

  constructor(private http: HttpClient) { }

  getProdutos(categoria: string): Observable<ProdutosAPI> {
    return this.http.get<ProdutosAPI>(`${this.baseUrl}/${categoria}`);
  }
  getProdutoById(id: string): Observable<Produtos> {
    return this.http.get<Produtos>(`${this.baseUrl}/${id}`);
  }
}
