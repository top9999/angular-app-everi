import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [
    NgFor
  ]
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  get cartItems(): { id: number, title: string, price: number, quantity: number }[] {
    return this.cartService.cartItems;
  }

  get totalPrice(): number {
    return +this.cartService.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }

  increaseQuantity(id: number): void {
    this.cartService.increaseQuantity(id);
    this.totalPrice;
  }

  decreaseQuantity(id: number): void {
    this.cartService.decreaseQuantity(id);
    this.totalPrice;
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
  }
}

function item(value: { id: number; title: string; price: number; quantity: number; }, index: number, array: { id: number; title: string; price: number; quantity: number; }[]) {
  throw new Error('Function not implemented.');
}
