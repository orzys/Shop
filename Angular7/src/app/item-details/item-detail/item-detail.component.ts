import { SexDetailComponent } from './../../sex-details/sex-detail/sex-detail.component';
import { BrandDetailComponent } from './../../brand-details/brand-detail/brand-detail.component';
import { ColorDetailComponent } from './../../color-details/color-detail/color-detail.component';
import { BrandDetailService } from './../../shared/brand-detail.service';
import { ColorDetailService } from './../../shared/color-detail.service';
import { CategoryDetailService } from './../../shared/category-detail.service';
import { BrandDetail } from './../../shared/brand-detail.model';
import { ColorDetail } from './../../shared/color-detail.model';
import { ItemDetail } from './../../shared/item-detail.model';
import { ItemDetailService } from './../../shared/item-detail.service';
import { ItemDetailsComponent } from './../item-details.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryDetail } from 'src/app/shared/category-detail.model';
import { SizeDetail } from 'src/app/shared/size-detail.model';
import { SexDetail } from 'src/app/shared/sex-detail.model';
import { SizeDetailService } from 'src/app/shared/size-detail.service';
import { SexDetailService } from 'src/app/shared/sex-detail.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryDetailComponent } from 'src/app/category-details/category-detail/category-detail.component';
import { SizeDetailComponent } from 'src/app/size-details/size-detail/size-detail.component';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styles: []
})
export class ItemDetailComponent implements OnInit {
  categoryList: CategoryDetail[];
  colorList: ColorDetail[];
  sizesList: SizeDetail[];
  brandList: BrandDetail[];
  sexList: SexDetail[];


  constructor(
    public service: ItemDetailService,
    public categoryService: CategoryDetailService,
    public colorService: ColorDetailService,
    public sizesService: SizeDetailService,
    public brandService: BrandDetailService,
    public sexService: SexDetailService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.resetForm();
    this.categoryService.getCategoryList().then(res => this.categoryList = res as CategoryDetail[]);
    this.colorService.getColorList().then(res => this.colorList = res as ColorDetail[]);
    this.sizesService.getSizeList().then(res => this.sizesList = res as SizeDetail[]);
    this.brandService.getBrandList().then(res => this.brandList = res as BrandDetail[]);
    this.sexService.getSexList().then(res => this.sexList = res as SexDetail[]);
  }

  resetForm(form?: NgForm){
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      ItemID: 0,
      ItemName: '',
      ItemDescription: '',
      ItemImage: '',
      ItemPrice: 0,
      ItemQuantity: 0,
      ItemRaiting: 0,
      CategoryID: 0,
      CategoryName: '',
      ColorID: 0,
      ColorName: '',
      SizeID: 0,
      SizeName: '',
      BrandID: 0,
      BrandName: '',
      SexID: 0,
      SexName: ''
    };
  }

  // onSubmit(form: NgForm){
  //   if(this.service.formData.ItemID==0)
  //     this.insertRecord(form);
  //   else
  //     this.updateRecord(form);
  // }

  addNewCategory(form: NgForm){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(CategoryDetailComponent, dialogConfig).afterClosed()
    .subscribe(res => {this.categoryService.getCategoryList().then(res => this.categoryList = res as CategoryDetail[]); });
  }

  addNewColor(form: NgForm){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(ColorDetailComponent, dialogConfig).afterClosed()
    .subscribe(res => {this.colorService.getColorList().then(res => this.colorList = res as ColorDetail[]); });
  }

  addNewSize(form: NgForm){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(SizeDetailComponent, dialogConfig)
    .afterClosed()
    .subscribe(res => {this.sizesService.getSizeList().then(res => this.sizesList = res as SizeDetail[]); });
  }

  addNewBrand(form: NgForm){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(BrandDetailComponent, dialogConfig)
    .afterClosed()
    .subscribe(res => {this.brandService.getBrandList().then(res => this.brandList = res as BrandDetail[]); });
  }

  addNewSex(form: NgForm){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(SexDetailComponent, dialogConfig)
    .afterClosed()
    .subscribe(res => {this.sexService.getSexList().then(res => this.sexList = res as SexDetail[]); });
  }

  onSubmit(form: NgForm){
    if (document.activeElement.getAttribute('Name') == 'firstSubmit') {
      // console.log("piewszy");
      if (this.service.formData.ItemID == 0) {
        this.insertRecord(form);
        // console.log(form);
        // console.log("new inserted");
      } else {
        this.updateRecord(form);
        // console.log("updated");
      }
    } else {
      // console.log("drugi");
      // console.log(form);
      // console.log(this.AddVariant(form));
        this.AddVariant(form);
        // console.log("variant inserted");
    }
  }

  insertRecord(form: NgForm){
    this.service.formData.ItemRaiting=0;
    this.service.postItemDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.success('Submitted successfully', 'Add item');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  AddVariant(form: NgForm){
    // zerowanie id, bo inaczej chce nam wpisać kolejny wiersz z tym samym id
    this.service.formData.ItemID = 0;
    console.log(this.service.formData);
    this.service.postItemDetail().subscribe(
      res => {
        this.toastr.success('Submitted successfully', 'Add variant');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }


  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.service.formData.ItemImage = (<FileReader> event.target).result as string;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  updateRecord(form: NgForm){
    this.service.putItemDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.info('Submitted successfully', 'Add item');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
}
