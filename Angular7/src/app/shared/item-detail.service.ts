import { CategoryDetail } from 'src/app/shared/category-detail.model';
import { HttpClient } from '@angular/common/http';
import { ItemDetail } from './item-detail.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailService {
  formData: ItemDetail;
  readonly rootURL = 'http://localhost:61263/api';
  list: ItemDetail[];
  categoriesList: CategoryDetail[];

  constructor(
    private http: HttpClient
  ) { }

  getItemById(id){
    return this.http.get(this.rootURL+'/Items/'+id).toPromise();
  }

  getItemByCategory(name : string){
    return this.http.get(this.rootURL+'/Items/category/'+name).toPromise().then(res => this.list = res as ItemDetail[]);
  }

  getItemList(){
    return this.http.get(this.rootURL+'/Items').toPromise();
   }

  postItemDetail(){
    return this.http.post(this.rootURL+ '/Items', this.formData)
  }

  putItemDetail(){
    return this.http.put(this.rootURL + '/Items/' + this.formData.ItemID,this.formData)
  }

  deleteItemDetail(id){
    return this.http.delete(this.rootURL + '/Items/' + id)
  }

  refreshList(){
    this.http.get(this.rootURL + '/Items').toPromise().then(res => this.list = res as ItemDetail[])
  }

  refreshCategories(){
    this.http.get(this.rootURL + '/Categories').toPromise().then(res => this.categoriesList = res as CategoryDetail[]);
  }

  getItemByName(name: string){
    this.http.get(this.rootURL+'Items/details/'+name).toPromise().then(res => this.list = res as ItemDetail[])
  }
}
