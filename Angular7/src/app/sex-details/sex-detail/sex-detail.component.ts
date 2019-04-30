import { ToastrService } from 'ngx-toastr';
import { SexDetailService } from './../../shared/sex-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sex-detail',
  templateUrl: './sex-detail.component.html',
  styles: []
})
export class SexDetailComponent implements OnInit {

  constructor(
    public service: SexDetailService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      SexID: 0,
      SexName: '',
    }
  }

  onSubmit(form: NgForm){
    if(this.service.formData.SexID==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postSexDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.success('Submitted successfully', 'Add sex');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm){
    this.service.putSexDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Submitted successfully', 'Add sex');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
