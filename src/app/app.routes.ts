import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/productdetail/productdetail.component';
import { SalesDashboardComponent } from './pages/salesdashboard/salesdashboard.component';
import { SearchComponent } from './pages/search/search.component';
import { ContatoComponent } from './pages/contatos/contatos.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }, 

    { path: 'search', component: SearchComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'dashboard', component: SalesDashboardComponent },
    { path: 'contatos', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: '**', redirectTo: '' }
];