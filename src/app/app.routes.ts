import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {   path: 'product/:id', component: ProductDetailsComponent },
    { path: 'products', component: ProductListComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'cart', component: CartComponent },
];

