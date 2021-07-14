import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  providers: [ProductService],
})
export class TestServiceComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  getProducts() {
    this.products = this.productService.getProducts();
  }
}
