import { HttpClient } from '@angular/common/http';
import { ColorDetail } from './color-detail.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorDetailService {
  formData: ColorDetail;
  readonly rootURL = 'http://localhost:61263/api';
  list: ColorDetail[];

  constructor(private http: HttpClient) { }

  getColorList(){
    return this.http.get(this.rootURL+'/Colors').toPromise();
   }

  postColorDetail(){
    return this.http.post(this.rootURL+ '/Colors', this.formData)
  }

  putColorDetail(){
    return this.http.put(this.rootURL + '/Colors/' + this.formData.ColorID,this.formData)
  }

  deleteColorDetail(id){
    return this.http.delete(this.rootURL + '/Colors/' + id)
  }

  refreshList(){
    this.http.get(this.rootURL + '/Colors').toPromise().then(res => this.list = res as ColorDetail[])
  }
}
