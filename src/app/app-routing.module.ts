import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/list/product-list.component';
import { AddComponent } from './products/add/add.component';
import { DetailsComponent } from './products/details/details.component';
import { ProductGridComponent } from './products/grid/product-grid.component';

const routes: Routes = [
  { path: '', redirectTo: 'products/list', pathMatch: 'full' },
  { path: 'products/list', component: ProductListComponent },
  { path: 'products/grid', component: ProductGridComponent },
  { path: 'add', component: AddComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
