import { Component, OnInit } from '@angular/core';

import { ProductsComponent } from './../products.component';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent extends ProductsComponent implements OnInit {
  override heading = 'Grid List';

  constructor(private productService: ProductService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.fetchProducts();
    this.heading = "Grid List";
  }

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => console.error('There was an error!', error),
    });
  }


  override selectProduct(productId: number): void {
    this.router.navigate(['/details', productId]);
  }
}
