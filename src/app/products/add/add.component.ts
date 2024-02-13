import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addProductForm!: FormGroup;
  submitted = false;
  error: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      shortDesc: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.addProductForm.valid) {
      const newProduct: Product = this.addProductForm.value;

      this.productService.addProduct(newProduct).subscribe(
          product => {
            this.addProductForm.reset();
            this.submitted = false;
            this.router.navigate(['/products']);
          },
          error => {
            this.error = 'Error adding product';
            console.error('Error:', error);
          }
        );
    }
  }

  goBack(): void {
    this.router.navigate(['/products/list']);
  }
}
