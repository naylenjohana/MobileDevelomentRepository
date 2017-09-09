import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SalesInvoiceComponent } from './pages/sales-invoice/sales-invoice.component';
import { SalesInvoiceDetailComponent } from './pages/sales-invoice-detail/sales-invoice-detail.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent,
    ProductsComponent,
    ProductDetailComponent,
    SalesInvoiceComponent,
    SalesInvoiceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
