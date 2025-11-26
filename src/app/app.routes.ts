import { Routes } from '@angular/router';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'home'},
    {path: 'card-produto', component: CardProdutoComponent, title: 'CardProduto' },
    {path: '**', redirectTo: '' }
];
