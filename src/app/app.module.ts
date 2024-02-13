import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductGridComponent } from './products/grid/product-grid.component';
import { ProductListComponent } from './products/list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './products/details/details.component';
import { AddComponent } from './products/add/add.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductGridComponent,
    ProductListComponent,
    DetailsComponent,
    AddComponent
  ],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
