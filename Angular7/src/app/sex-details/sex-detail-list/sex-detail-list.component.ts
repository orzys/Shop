import { ToastrService } from 'ngx-toastr';
import { SexDetailService } from './../../shared/sex-detail.service';
import { SexDetail } from './../../shared/sex-detail.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sex-detail-list',
  templateUrl: './sex-detail-list.component.html',
  styles: []
})
export class SexDetailListComponent implements OnInit {

  constructor(
    public service: SexDetailService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(sd: SexDetail){
    this.service.formData = Object.assign({}, sd);
  }

  onDelete(SexID){
    if(confirm('Are you sure to delete this record?'))
      this.service.deleteSexDetail(SexID)
      .subscribe(res => {
        this.service.refreshList();
        this.toastr.error('Deleted successfully!','Sexes');
      },
      err => {
        console.log(err);
      }
      )
  }

}
