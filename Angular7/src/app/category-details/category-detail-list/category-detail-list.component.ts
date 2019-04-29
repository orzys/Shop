import { ToastrService } from 'ngx-toastr';
import { CategoryDetail } from './../../shared/category-detail.model';
import { CategoryDetailService } from './../../shared/category-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-detail-list',
  templateUrl: './category-detail-list.component.html',
  styles: []
})
export class CategoryDetailListComponent implements OnInit {

  constructor(public service: CategoryDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(cd: CategoryDetail){
    this.service.formData = Object.assign({},cd);
  }

  onDelete(CategoryID){
    if(confirm('Are you sure to delete this record?'))
    this.service.deleteCategoryDetail(CategoryID).
    subscribe(res => {
      this.service.refreshList();
      this.toastr.error('Deleted successfully', 'Categories');
    },
    err => {
      console.log(err);
    })
  }

}
