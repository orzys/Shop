import { NgForm } from '@angular/forms';
import { CategoryDetailService } from './../../shared/category-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styles: []
})
export class CategoryDetailComponent implements OnInit {

  constructor(public service: CategoryDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      CategoryID: 0,
      CategoryName: '',
      CategoryDescription: ''
    }
  }

  onSubmit(form: NgForm){
    if(this.service.formData.CategoryID==0)
      this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postCategoryDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Add category');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm){
    this.service.putCategoryDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Add category');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
