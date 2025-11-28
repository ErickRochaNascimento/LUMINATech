import { Component, OnInit, inject, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesService } from '../../services/sales.service';
import { HeaderComponent } from "../../components/header/header.component";
import { Chart, registerables } from 'chart.js/auto';

// Registra os componentes do Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-sales-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './salesdashboard.component.html',
  styleUrl: './salesdashboard.component.css'
})
export class SalesDashboardComponent implements OnInit, AfterViewInit {
  private salesService = inject(SalesService);

  // Variáveis para as métricas
  totalVendas: number = 0;
  receitaTotal: number = 0;
  produtoMaisVendido: string = '-';

  // Referência ao elemento Canvas do HTML
  @ViewChild('salesChart') salesChart!: ElementRef;

  ngOnInit(): void {
    this.calcularMetricas();
  }

  ngAfterViewInit(): void {
    this.gerarGrafico();
  }

  calcularMetricas() {
    const vendas = this.salesService.getSales();
    
    // 1. Total de Vendas
    this.totalVendas = vendas.length;

    // 2. Receita Total (Soma dos preços)
    this.receitaTotal = vendas.reduce((acc: number, venda: any) => acc + venda.price, 0);

    // 3. Produto Mais Vendido
    if (vendas.length > 0) {
      const contagem: any = {};
      vendas.forEach((v: any) => {
        contagem[v.productTitle] = (contagem[v.productTitle] || 0) + 1;
      });
      
      this.produtoMaisVendido = Object.keys(contagem).reduce((a, b) => 
        contagem[a] > contagem[b] ? a : b
      );
    }
  }

  gerarGrafico() {
    const vendas = this.salesService.getSales();
    
    // Agrupa vendas por produto para o gráfico
    const dadosPorProduto: any = {};
    vendas.forEach((v: any) => {
      dadosPorProduto[v.productTitle] = (dadosPorProduto[v.productTitle] || 0) + v.price;
    });

    const labels = Object.keys(dadosPorProduto);
    const data = Object.values(dadosPorProduto);

    // Cria o Gráfico
    new Chart(this.salesChart.nativeElement, {
      type: 'bar', // Tipo barra
      data: {
        labels: labels,
        datasets: [{
          label: 'Receita por Produto (R$)',
          data: data as number[],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Performance de Vendas' }
        }
      }
    });
  }
}