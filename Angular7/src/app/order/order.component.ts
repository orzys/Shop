import { ToastrService } from 'ngx-toastr';
import { OrderService } from './../shared/order.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {
  service: OrderService;
  cartArray: any;
  amountToPay: number = 0;


  constructor(
    private toastr: ToastrService
  ) { }

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

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      OrderID: 0,
      OrderDate: '',
      OrderStatus: '',
      ItemID: 0,
      Quantity: 0,
      TotalPrice: 0,
      UserID: 0,
      FirstName: '',
      LastName: '',
      ZipCode: '',
      City: '',
      StreetName: '',
      StreetNumber: '',
      PaymentMethod: ''
    }
  }

  insertRecord(form: NgForm){
    this.service.postOrder().subscribe(
      res => {
        this.resetForm();
        this.toastr.success('Submitted successfully', 'Add Order');
      },
      err => {
        console.log(err);
      }
    )
  }

}
