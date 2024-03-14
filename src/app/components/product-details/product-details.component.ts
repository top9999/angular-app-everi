import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductService],
  imports: [
    RouterModule,
    NgIf
  ],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  showConfirmation: boolean = false;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }

  addToCart(): void {
    if (this.product) {
      this.showConfirmation = true;
      this.cartService.addToCart({id: this.product.id, title: this.product.title, price: this.product.price});

      setTimeout(() => {
          this.showConfirmation = false;
      }, 3000); // 3 seconds
    }
  }

  goBack(): void {
    this.router.navigate(['/previous-page-url']);
  }
}