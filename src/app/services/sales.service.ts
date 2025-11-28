import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private storageKey = 'lumina_sales';

  recordSale(produto: Produto): void {
    const currentSales = this.getSales();
    const newSale = {
      ...produto,
      saleDate: new Date()
    };
    
    currentSales.push(newSale);
    localStorage.setItem(this.storageKey, JSON.stringify(currentSales));
    
    alert(`Compra realizada com sucesso!\nProduto: ${produto.title}`);
  }

  getSales(): any[] {
    const sales = localStorage.getItem(this.storageKey);
    return sales ? JSON.parse(sales) : [];
  }
}