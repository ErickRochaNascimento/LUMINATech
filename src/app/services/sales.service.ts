import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private storageKey = 'lumina_sales';

  // 1. Registra a venda
  recordSale(produto: Produto): void {
    const currentSales = this.getSales();
    
    // Cria um objeto de venda com a data atual
    const newSale = {
      productId: produto.id,
      productTitle: produto.title,
      price: produto.price,
      date: new Date().toISOString()
    };
    
    currentSales.push(newSale);
    localStorage.setItem(this.storageKey, JSON.stringify(currentSales));
    
    // Feedback visual simples
    alert(`Compra realizada com sucesso!\nProduto: ${produto.title}`);
  }

  // 2. Recupera todas as vendas
  getSales(): any[] {
    const sales = localStorage.getItem(this.storageKey);
    return sales ? JSON.parse(sales) : [];
  }

  // 3. Limpa as vendas (útil para testes)
  clearSales(): void {
    localStorage.removeItem(this.storageKey);
  }
}