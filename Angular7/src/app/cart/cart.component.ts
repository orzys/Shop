import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {

  constructor() { }

  cartArray: any
  amountToPay: number = 0;

  ngOnInit() {
    console.log("cart przed parsem" + this.cartArray)
    this.cartArray = JSON.parse(localStorage.getItem('itemsFromCartArray'));
    console.log("cart po parsie" + this.cartArray)
    if (this.cartArray != null) {
      this.cartArray.forEach(product => {
        console.log("product" + product.quantity);
        this.amountToPay += product.price * product.quantity;
        console.log(this.amountToPay);
      });
      console.log(this.amountToPay);
  }
  }

  clearCart(){
    localStorage.removeItem('itemsFromCartArray');
    this.cartArray = JSON.parse(localStorage.getItem('itemsFromCartArray'));
    this.amountToPay = 0;
  }

  updateAmount(){
    this.cartArray.forEach(product => {
      this.amountToPay = 0;
      this.amountToPay += product.price * this.cartArray.quantity;
    });
  }


}
