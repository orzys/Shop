import { CategoryDetailService } from './../shared/category-detail.service';
import { ItemDetail } from './../shared/item-detail.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../shared/product-detail.service';
import { ItemDetailService } from '../shared/item-detail.service';
import { ListFromCategory } from '../shared/list-from-category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styles: []
})
export class CategoriesListComponent implements OnInit {
  public itemsFromCategory: ListFromCategory[]
  constructor(
    public productService: ProductDetailService,
    public itemService: ItemDetailService,
    public router: Router,
    public categoriesService: CategoryDetailService
  ) { }

  ngOnInit() {
   this.categoriesService.refreshList();
  }

  goToCategory(name: string){
    this.productService.getItemByCategory(name).then(res => this.itemsFromCategory = res as ListFromCategory[]);
    console.log(this.productService.getItemByCategory(name).then(res => this.itemsFromCategory = res as ListFromCategory[]));
    console.log(name);
    this.router.navigateByUrl('items/category/'+name);
  }



}
