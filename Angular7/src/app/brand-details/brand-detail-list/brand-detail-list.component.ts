import { BrandDetail } from './../../shared/brand-detail.model';
import { BrandDetailService } from './../../shared/brand-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-detail-list',
  templateUrl: './brand-detail-list.component.html',
  styles: []
})
export class BrandDetailListComponent implements OnInit {

  constructor(public service: BrandDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(bd: BrandDetail){
    this.service.formData = Object.assign({}, bd);
  }

  onDelete(BrandID){
    if(confirm('Are you sure to delete this record?'))
      this.service.deleteBrandDetail(BrandID)
      .subscribe(res => {
        this.service.refreshList();
        this.toastr.error('Deleted successfully!','Brands');
      },
      err => {
        console.log(err);
      }
      )
  }

}
