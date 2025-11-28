import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/productdetail/productdetail.component';
import { SalesDashboardComponent } from './pages/salesdashboard/salesdashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }, 
    
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'dashboard', component: SalesDashboardComponent },
    { path: '**', redirectTo: '' }
];