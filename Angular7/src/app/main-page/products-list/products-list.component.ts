import { ProductDetail } from 'src/app/shared/product-detail.model';
import { ItemDetail } from './../../shared/item-detail.model';
import { ItemDetailService } from './../../shared/item-detail.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductDetailService } from 'src/app/shared/product-detail.service';
import { RouterModule, Router } from '@angular/router';
import { Sort, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: []
})
export class ProductsListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort
  public specifiedItem: ProductDetail[];
  sortedData: ItemDetail[];
  itName: string;

  constructor(
    public service: ItemDetailService,
    private toastr: ToastrService,
    private itemService: ItemDetailService,
    private productService: ProductDetailService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.sortedData = this.service.list;
    this.service.refreshList();
    console.log(this.sortedData)
  }

  goToDetails(name: string){
    // this.productService.getItemByName(name);
    this.productService.getItemByName(name).then(res => this.specifiedItem = res as ProductDetail[])
    console.log(this.productService.getItemByName(name));
    // this.router.navigate(['/shop/details/'+ id]);
    this.router.navigateByUrl('/shop/details/'+name);
    // console.log(this.productService.getItemById(id));
  }

  sortData(sort: Sort) {
    const data = this.service.list.slice();
    if (!sort.active || sort.direction === '') {
      this.service.list = data;
      return;
    }

    this.service.list = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'ItemName': return this.compare(a.ItemName, b.ItemName, isAsc);
        case 'ItemBrand': return this.compare(a.BrandName, b.BrandName, isAsc);
        case 'ItemPrice': return this.compareNumbers(a.ItemPrice, b.ItemPrice, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  compareNumbers(a: number, b: number, isAsc: boolean){
    return (a>b ? 1:-1)*(isAsc?1:-1);
  }

  Search(){
    if(this.itName!=""){
      this.service.list = this.service.list.filter(
        res=>{
          return res.ItemName.toLocaleLowerCase().match(this.itName.toLocaleLowerCase());
        }
      )
    } else if(this.itName == ""){
      this.ngOnInit();
    }

  }
  // ngOnDestroy(name: string) {
  //   console.log("ondestroy");
  //   // this.productService.getItemByName(name).then(res => this.productService.list = res as ItemDetail[])
  //   console.log(this.productService.getItemByName(name).then(res => this.productService.list = res as ItemDetail[]));
  // }


}
