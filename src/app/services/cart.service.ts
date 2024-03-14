import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: { id: number, title: string, price: number, quantity: number }[] = [];

  constructor() {}

  addToCart(item: { id: number, title: string, price: number }): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  removeFromCart(id: number): void {
    const index = this.cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  increaseQuantity(id: number): void {
    const item = this.cartItems.find(item => item.id === id);
    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(id: number): void {
    const item = this.cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }
}