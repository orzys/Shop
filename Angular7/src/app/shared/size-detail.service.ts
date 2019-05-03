import { SizeDetail } from './size-detail.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeDetailService {
  formData: SizeDetail;
  readonly rootURL = 'http://localhost:61263/api';
  list: SizeDetail[];

  constructor(private http: HttpClient) { }

  getSizeList(){
    return this.http.get(this.rootURL+'/Sizes').toPromise();
   }

  postSizeDetail(){
    return this.http.post(this.rootURL+ '/Sizes', this.formData)
  }

  putSizeDetail(){
    return this.http.put(this.rootURL + '/Sizes/' + this.formData.SizeID,this.formData)
  }

  deleteSizeDetail(id){
    return this.http.delete(this.rootURL + '/Sizes/' + id)
  }

  refreshList(){
    this.http.get(this.rootURL + '/Sizes').toPromise().then(res => this.list = res as SizeDetail[])
  }
}
