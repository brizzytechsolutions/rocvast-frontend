import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-product-base',
  template: ''
})
export class ProductsComponent {
  @Input() products: Product[] = [];
  @Output() selectProd = new EventEmitter<number>();

  heading = 'Products Grid';

  selectProduct(productId: number) {
    this.selectProd.emit(productId);
  }
}
