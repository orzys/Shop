import { ProductDetail } from 'src/app/shared/product-detail.model';
import { ItemDetail } from './../../shared/item-detail.model';
import { ItemDetailService } from './../../shared/item-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductDetailService } from 'src/app/shared/product-detail.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: []
})
export class ProductsListComponent implements OnInit {
  public specifiedItem: ProductDetail[]


  constructor(
    public service: ItemDetailService,
    private toastr: ToastrService,
    private itemService: ItemDetailService,
    private productService: ProductDetailService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  goToDetails(name: string){
    // this.productService.getItemByName(name);
    this.productService.getItemByName(name).then(res => this.specifiedItem = res as ProductDetail[])
    console.log(this.productService.getItemByName(name));
    // this.router.navigate(['/shop/details/'+ id]);
    this.router.navigateByUrl('/shop/details/'+name);
    // console.log(this.productService.getItemById(id));
  }

  // ngOnDestroy(name: string) {
  //   console.log("ondestroy");
  //   // this.productService.getItemByName(name).then(res => this.productService.list = res as ItemDetail[])
  //   console.log(this.productService.getItemByName(name).then(res => this.productService.list = res as ItemDetail[]));
  // }


}
