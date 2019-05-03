import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SexDetail } from './sex-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SexDetailService {
  formData: SexDetail;
  readonly rootURL = 'http://localhost:61263/api';
  list: SexDetail[];

  constructor(
    private http: HttpClient
  ) { }

  getSexList(){
    return this.http.get(this.rootURL+'/Sexes').toPromise();
   }

  postSexDetail(){
    return this.http.post(this.rootURL+ '/Sexes', this.formData)
  }

  putSexDetail(){
    return this.http.put(this.rootURL + '/Sexes/' + this.formData.SexID,this.formData)
  }

  deleteSexDetail(id){
    return this.http.delete(this.rootURL + '/Sexes/' + id)
  }

  refreshList(){
    this.http.get(this.rootURL + '/Sexes').toPromise().then(res => this.list = res as SexDetail[])
  }
}
