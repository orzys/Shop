import { ColorDetail } from './../../shared/color-detail.model';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColorDetailService } from 'src/app/shared/color-detail.service';
import { Sort, MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-color-detail-list',
  templateUrl: './color-detail-list.component.html',
  styles: []
})
export class ColorDetailListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  sortedData: ColorDetail[];

  constructor(
    public service: ColorDetailService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  sortData(sort: Sort) {
    const data = this.service.list.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'ColorName': return this.compare(a.ColorName, b.ColorName, isAsc);
        case 'ColorCode': return this.compare(a.ColorCode, b.ColorCode, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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
