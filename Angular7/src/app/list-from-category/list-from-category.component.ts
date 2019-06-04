import { CategoriesListComponent } from './../categories-list/categories-list.component';
import { ProductDetail } from './../shared/product-detail.model';
import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../shared/product-detail.service';

@Component({
  selector: 'app-list-from-category',
  templateUrl: './list-from-category.component.html',
  styles: []
})
export class ListFromCategoryComponent implements OnInit {
  productService: ProductDetailService
  categoriesList: CategoriesListComponent[]

  constructor() { }

  ngOnInit() {
    console.log("X")
    if(this.productService.listFromCategory) console.log(this.productService.listFromCategory[0])
    console.log("D")
  }

}
