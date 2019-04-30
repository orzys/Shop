import { SizeDetailService } from './../../shared/size-detail.service';
import { SizeDetail } from './../../shared/size-detail.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-size-detail-list',
  templateUrl: './size-detail-list.component.html',
  styles: []
})
export class SizeDetailListComponent implements OnInit {

  constructor(
    public service: SizeDetailService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(sd: SizeDetail){
    this.service.formData = Object.assign({}, sd);
  }

  onDelete(SizeID){
    if(confirm('Are you sure to delete this record?'))
      this.service.deleteSizeDetail(SizeID)
      .subscribe(res => {
        this.service.refreshList();
        this.toastr.error('Deleted successfully!','Sizes');
      },
      err => {
        console.log(err);
      }
      )
  }

}
