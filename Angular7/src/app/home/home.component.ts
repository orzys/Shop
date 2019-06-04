import { CartComponent } from './../cart/cart.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { timer } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails;
  productInCartQuantity = 0;
  cartArray: any
  amountToPay: number = 0;
  quantityInCart = 0;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    timer(1000, 1000).pipe(
      take(1000)).subscribe(x=>{
        this.getQuantity();
      })

    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      }
    )


    this.cartArray = JSON.parse(localStorage.getItem('itemsFromCartArray'));
    console.log("cart po parsie" + this.cartArray)
    if (this.cartArray != null) {
      this.cartArray.forEach(product => {
        console.log("product" + product.id);
        this.amountToPay += product.price * product.quantity;
        console.log(this.amountToPay);
      });
      console.log(this.amountToPay);
  }
  }

  getRole(){
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    return userRole;
  }




  getQuantity(){
    if(this.cartArray!=null){
      this.quantityInCart = 0;
      this.cartArray.forEach(product => {
        this.quantityInCart += 1;
      });
      return this.quantityInCart;
    }
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
