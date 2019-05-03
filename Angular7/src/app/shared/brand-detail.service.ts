import { BrandDetail } from './brand-detail.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandDetailService {
  formData: BrandDetail;
  readonly rootURL = 'http://localhost:61263/api';
  list: BrandDetail[];

  constructor(private http: HttpClient) { }

  getBrandList(){
    return this.http.get(this.rootURL+'/Brands').toPromise();
   }

  postBrandDetail(){
    return this.http.post(this.rootURL+ '/Brands', this.formData)
  }

  putBrandDetail(){
    return this.http.put(this.rootURL + '/Brands/' + this.formData.BrandID,this.formData)
  }

  deleteBrandDetail(id){
    return this.http.delete(this.rootURL + '/Brands/' + id)
  }

  refreshList(){
    this.http.get(this.rootURL + '/Brands').toPromise().then(res => this.list = res as BrandDetail[])
  }
}
