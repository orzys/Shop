import { ColorDetail } from './../../shared/color-detail.model';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ColorDetailService } from 'src/app/shared/color-detail.service';

@Component({
  selector: 'app-color-detail-list',
  templateUrl: './color-detail-list.component.html',
  styles: []
})
export class ColorDetailListComponent implements OnInit {

  constructor(
    public service: ColorDetailService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(cd: ColorDetail){
    this.service.formData = Object.assign({}, cd);
  }

  onDelete(ColorID){
    if(confirm('Are you sure to delete this record?'))
      this.service.deleteColorDetail(ColorID)
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
