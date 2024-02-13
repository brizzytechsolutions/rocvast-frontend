import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Product } from '../interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  product: Product | null = null;
  error: string | null = null;
  private subscription: Subscription | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        map(params => params['id']),
        switchMap(id => this.productService.getProductById(id)),
        catchError(error => {
          this.error = 'Error fetching product details';
          console.error('Error:', error);
          return [];
        })
      )
      .subscribe(product => this.product = product);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  goBack(): void {
    this.router.navigate(['/products/list']);
  }
}
