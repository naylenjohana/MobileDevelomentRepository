import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import { InMemoryProductService } from './mock/in-memory-product.service';
import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';
import { DetailComponent } from './detail/detail/detail.component'; 
import { StudentComponent } from './student/student.component';
import {AppRoutingModule} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryProductService),
    AppRoutingModule
  ],
  providers: [ProductService, InMemoryProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
