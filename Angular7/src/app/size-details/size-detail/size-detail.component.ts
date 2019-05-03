import { SizeDetailService } from './../../shared/size-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-size-detail',
  templateUrl: './size-detail.component.html',
  styles: []
})
export class SizeDetailComponent implements OnInit {

  constructor(public service: SizeDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      SizeID: 0,
      SizeName: '',
    }
  }

  onSubmit(form: NgForm){
    if(this.service.formData.SizeID==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postSizeDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.success('Submitted successfully', 'Add size');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm){
    this.service.putSizeDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Submitted successfully', 'Add size');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
