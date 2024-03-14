import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
  imports: [
    RouterModule,
    NgFor,
    NgIf
  ],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
}