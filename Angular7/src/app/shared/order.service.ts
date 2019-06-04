import { FormBuilder, Validators } from '@angular/forms';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly rootURL = 'http://localhost:61263/api';
  formData: Order;
  list: Order[];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,

  ) { }

  getOrderByUser(){
    return this.http.get(this.rootURL+'/Orders/UserOrders').toPromise();
  }

  getOrderList(){
    return this.http.get(this.rootURL+'/Orders').toPromise();
   }

  postOrder(){
    return this.http.post(this.rootURL+ '/Orders', this.formData)
  }

  putOrder(){
    return this.http.put(this.rootURL + '/Orders/' + this.formData.ItemID,this.formData)
  }

  deleteOrder(id){
    return this.http.delete(this.rootURL + '/Orders/' + id)
  }

  refreshList(){
    this.http.get(this.rootURL + '/Orders').toPromise().then(res => this.list = res as Order[])
  }

  formModel = this.fb.group({
    OrderDate: '',
    OrderStatus: '',
    UserID: '',
    ItemID: 0,
    Quantity: 0,
    TotalPrice: 0,
    FirstName : ['', [Validators.required, Validators.minLength(2)]],
    LastName : ['', [Validators.required, Validators.minLength(2)]],
    City : ['', Validators.required],
    ZipCode : ['', Validators.required],
    StreetName : [''],
    StreetNumber : ['', Validators.required]
  });
}
