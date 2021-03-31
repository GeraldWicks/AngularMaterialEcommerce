import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : string[] = [];
  product_price : number[] = [];
  total : number = 0;

  addToCart(product) {
    this.items.push(product);
  }

  addProductPrice(price) {
    this.product_price.push(price);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
