// src/app/services/sales.service.ts
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private storageKey = 'lumina_sales';

  recordSale(produto: Produto): void {
    const currentSales = this.getSales();
    
    // Agora salvamos categoria e brand também
    const newSale = {
      productId: produto.id,
      productTitle: produto.title,
      price: produto.price,
      category: produto.category || 'Outros', // Fallback
      brand: produto.brand || 'Genérico',     // Fallback
      date: new Date().toISOString()
    };
    
    currentSales.push(newSale);
    localStorage.setItem(this.storageKey, JSON.stringify(currentSales));
    
    alert(`Compra realizada com sucesso!\nProduto: ${produto.title}`);
  }

  getSales(): any[] {
    const sales = localStorage.getItem(this.storageKey);
    return sales ? JSON.parse(sales) : [];
  }

  clearSales(): void {
    localStorage.removeItem(this.storageKey);
  }
}