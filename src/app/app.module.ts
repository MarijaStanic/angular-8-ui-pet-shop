import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { HomeComponent } from './home/home.component';

import { CustomersService } from './customers/customers.service';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
//import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';
import { LoginComponent } from './login/login.component';
import { CustomerRowComponent } from './customers/customer-row/customer-row.component';
import { CreateOrderComponent } from './orders/createorder/create-order.component';
import { NavtabsComponent } from './common/navtabs/navtabs.component';
import { TableComponent } from './common/table/table.component';
import { StocksComponent } from './stocks/stocks/stocks.component';
import { StockRowComponent } from './stocks/stock-row/stock-row.component';
import { StockFormComponent } from './stocks/stock-form/stock-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    HomeComponent,
    CustomerFormComponent,
    LoginComponent,
    CustomerRowComponent,
    CreateOrderComponent,
    NavtabsComponent,
    TableComponent,
    StocksComponent,
    StockRowComponent,
    StockFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  //  ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomersService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CustomerFormComponent] // components that need to be rendered dynamically 
})
export class AppModule { }
