import { ListFromCategory } from './list-from-category.model';
import { HttpClient } from '@angular/common/http';
import { ItemDetail } from './item-detail.model';
import { Injectable, EventEmitter } from '@angular/core';
import { ProductDetail } from './product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  formData: ProductDetail;
  readonly rootURL = 'http://localhost:61263/api';
  list: ProductDetail[];
  onAddToCartEvent: EventEmitter<any> = new EventEmitter();
  listFromCategory: ListFromCategory[];


  constructor(
    private http: HttpClient
  ) { }

  // getItemById(id){
  //   return this.http.get(this.rootURL+'/Items/'+id).toPromise().then(res => this.list = res as ItemDetail[]);
  // }

  getItemByName(name: string){
    return this.http.get(this.rootURL+'/Items/details/'+name).toPromise().then(res => this.list = res as ProductDetail[]);
  }

  getItemByCategory(name : string){
    console.log(name);
    return this.http.get(this.rootURL+'/Items/category/'+name).toPromise().then(res => this.listFromCategory = res as ListFromCategory[]);
  }

}
