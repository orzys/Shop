import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styles: []
})
export class OrderHistoryComponent implements OnInit {
  userDetails;

  constructor(
    public orderService: OrderService,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.orderService.getOrderList();
    this.orderService.refreshList();
    console.log(this.orderService.getOrderList());
    console.log(this.orderService.refreshList());

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      }
    )

  }

}
