import { Component, OnInit } from '@angular/core';
import {ProductsComponent} from "../products.component";
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent extends ProductsComponent implements OnInit {
  override heading = 'Product List';

  constructor(
    private productService: ProductService,
    private router: Router
    ) {
    super();
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => console.error('There was an error!', error),
    });
  }

  addProduct() {
    this.router.navigate(['/add']);
  }

  override selectProduct(productId: number): void {
    this.router.navigate(['/details', productId]);
  }
}
