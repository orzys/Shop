import { CategoryDetail } from './category-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryDetailService {
  formData: CategoryDetail;
  readonly rootURL = 'http://localhost:61263/api';
  list: CategoryDetail[];

  constructor(private http: HttpClient) { }

  getCategoryList(){
    return this.http.get(this.rootURL+'/Categories').toPromise();
   }

  postCategoryDetail(){
    return this.http.post(this.rootURL+'/Categories',this.formData)
  }

  putCategoryDetail(){
    return this.http.put(this.rootURL+'/Categories/'+this.formData.CategoryID,this.formData)
  }

  deleteCategoryDetail(id){
    return this.http.delete(this.rootURL+'/Categories/'+id)
  }

  refreshList(){
    this.http.get(this.rootURL+'/Categories').toPromise().then(res => this.list = res as CategoryDetail[])
  }
}
