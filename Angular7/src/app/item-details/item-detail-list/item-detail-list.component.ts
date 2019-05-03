import { ItemDetail } from './../../shared/item-detail.model';
import { ToastrService } from 'ngx-toastr';
import { ItemDetailService } from './../../shared/item-detail.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-item-detail-list',
  templateUrl: './item-detail-list.component.html',
  styles: []
})
export class ItemDetailListComponent implements OnInit {
  itemsList;

  constructor(
    public service: ItemDetailService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(id: ItemDetail){
    this.service.formData = Object.assign({}, id);
  }

  onDelete(ItemID){
    if(confirm('Are you sure to delete this record?'))
      this.service.deleteItemDetail(ItemID)
      .subscribe(res => {
        this.service.refreshList();
        this.toastr.error('Deleted successfully!','Items');
      },
      err => {
        console.log(err);
      }
      )
  }

}
