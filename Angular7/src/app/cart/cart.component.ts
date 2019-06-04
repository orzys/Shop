import { ItemDetailService } from './../shared/item-detail.service';
import { ToastrService } from 'ngx-toastr';
import { ProductDetailService } from './../shared/product-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../shared/order.service';
import { formatDate, formatNumber } from '@angular/common';
import { UserService } from '../shared/user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {

  constructor(
    public productService: ProductDetailService,
    public service: OrderService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    public userService: UserService,
    public orderService: OrderService,
    public itemService: ItemDetailService
  ) { }

  productInCartQuantity = 0;
  cartArray: any
  amountToPay: number = 0;
  userDetails;

  ngOnInit() {
    if (!$('#cartArr').length) {
      console.log("XDDDDD");
    }
    this.resetForm();
    console.log(this.orderService.getOrderList());
    $(document).ready(function () {
      $('#showFormButton').click(function () {
        $('#dataFormInOrder').toggle(500);
      });
    });
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        console.log("user details: " + this.userDetails.FirstName)
      },
      err => {
        console.log(err);
      },
    );

    console.log("cart przed parsem" + this.cartArray)
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

  orderItems(form: NgForm) {
    // let formJson = JSON.stringify(form.value);
    // console.log("form " + form);
    // console.log("json" + formJson)
    this.service.formData.UserID = this.userDetails.Id;
    this.service.formData.OrderStatus = "0";
    this.service.formData.TotalPrice = this.amountToPay;
    this.service.formData.OrderDate = formatDate(new Date(), 'yyyy/MM/dd HH:mm', 'en');
    this.cartArray.forEach(product => {
      this.service.formData.Quantity = product.quantity;
      this.service.formData.ItemID = product.id;
      this.insertRecord(form);
    });
    this.toastr.success('Submitted successfully', 'Add Order');
    this.clearCart();
    $('#dataFormInOrder').toggle(500);
  }

  updateQuantity(quantity) {
    this.itemService.formData.ItemQuantity -= quantity;
    this.itemService.putItemDetail();
  }

  updateRecord(form: NgForm) {
    this.itemService.putItemDetail().subscribe(
      res => {
        this.itemService.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      // automatycznie
      OrderID: 0,
      // automatycznie

      OrderDate: '',
      OrderStatus: '',
      ItemID: 0,
      Quantity: 0,
      TotalPrice: 0,
      UserID: 0,

      // Z formularza
      FirstName: '',
      LastName: '',
      ZipCode: '',
      City: '',
      StreetName: '',
      StreetNumber: '',
      PaymentMethod: ''
      // z formularza
    }
  }

  getDate() {
    return formatDate(new Date(), 'yyyy/MM/dd', 'en');
  }

  insertRecord(form: any) {
    this.service.postOrder().subscribe(
      res => {
        this.resetForm();
      },
      err => {
        console.log(err);
      }
    )
  }

  clearCart() {
    localStorage.removeItem('itemsFromCartArray');
    this.cartArray = JSON.parse(localStorage.getItem('itemsFromCartArray'));
    this.amountToPay = 0;
  }

  updateAmount() {
    this.amountToPay = 0;
    this.cartArray.forEach(product => {
      this.amountToPay += product.price * product.quantity;
      // this.service.formData.Quantity = product.quantity;
    });
    formatNumber(this.amountToPay, 'decimal');
  }


}
