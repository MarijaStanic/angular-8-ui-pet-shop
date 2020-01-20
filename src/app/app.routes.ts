import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { LoginComponent } from './login/login.component';
import { CreateOrderComponent } from './orders/createorder/create-order.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent }, 
    { path: 'customers', component: CustomersComponent },
    { path: 'orders/createOrder', component: CreateOrderComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
]; 