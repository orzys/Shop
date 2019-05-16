import { ToastrService } from 'ngx-toastr';
import { ColorDetailService } from './../../shared/color-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styles: []
})
export class ColorDetailComponent implements OnInit {

  constructor(
    public service: ColorDetailService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      ColorID: 0,
      ColorName: '',
      ColorCode: ''
    }
  }

  onSubmit(form: NgForm){
    if(this.service.formData.ColorID==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    if (this.service.formData.ColorCode == null) this.service.formData.ColorCode = '#000000';
    this.service.postColorDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.success('Submitted successfully', 'Add color');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm){
    this.service.putColorDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Submitted successfully', 'Add color');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
