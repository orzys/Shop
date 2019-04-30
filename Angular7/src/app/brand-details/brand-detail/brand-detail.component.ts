import { NgForm } from '@angular/forms';
import { BrandDetailService } from './../../shared/brand-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styles: []
})
export class BrandDetailComponent implements OnInit {

  constructor(public service: BrandDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      BrandID: 0,
      BrandName: '',
      BrandDescription: ''
    }
  }

  onSubmit(form: NgForm){
    if(this.service.formData.BrandID==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postBrandDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.success('Submitted successfully', 'Add brand');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm){
    this.service.putBrandDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Submitted successfully', 'Add brand');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
