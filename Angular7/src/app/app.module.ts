import { SexDetailService } from './shared/sex-detail.service';
import { ColorDetailService } from './shared/color-detail.service';
import { CategoryDetailService } from './shared/category-detail.service';
import { UserService } from './shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryDetailComponent } from './category-details/category-detail/category-detail.component';
import { CategoryDetailListComponent } from './category-details/category-detail-list/category-detail-list.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { BrandDetailComponent } from './brand-details/brand-detail/brand-detail.component';
import { BrandDetailListComponent } from './brand-details/brand-detail-list/brand-detail-list.component';
import { BrandDetailService } from './shared/brand-detail.service';
import { SizeDetailsComponent } from './size-details/size-details.component';
import { SizeDetailComponent } from './size-details/size-detail/size-detail.component';
import { SizeDetailListComponent } from './size-details/size-detail-list/size-detail-list.component';
import { SizeDetailService } from './shared/size-detail.service';
import { ColorDetailsComponent } from './color-details/color-details.component';
import { ColorDetailComponent } from './color-details/color-detail/color-detail.component';
import { ColorDetailListComponent } from './color-details/color-detail-list/color-detail-list.component';
import { SexDetailsComponent } from './sex-details/sex-details.component';
import { SexDetailComponent } from './sex-details/sex-detail/sex-detail.component';
import { SexDetailListComponent } from './sex-details/sex-detail-list/sex-detail-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemDetailComponent } from './item-details/item-detail/item-detail.component';
import { ItemDetailListComponent } from './item-details/item-detail-list/item-detail-list.component';
import { ItemDetailService } from './shared/item-detail.service';
import {MatDialogModule} from '@angular/material/dialog';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductsListComponent } from './main-page/products-list/products-list.component';
import { ProductDetailsComponent } from './main-page/product-details/product-details.component';
import { NgPipesModule } from 'ngx-pipes';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { MatTableModule, MatSortHeader, MatPaginatorModule, MatPaginator, MatSortModule } from '@angular/material';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ListFromCategoryComponent } from './list-from-category/list-from-category.component';
import { OrderHistoryComponent } from './order-history/order-history.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    CategoryDetailsComponent,
    CategoryDetailComponent,
    CategoryDetailListComponent,
    BrandDetailsComponent,
    BrandDetailComponent,
    BrandDetailListComponent,
    SizeDetailsComponent,
    SizeDetailComponent,
    SizeDetailListComponent,
    ColorDetailsComponent,
    ColorDetailComponent,
    ColorDetailListComponent,
    SexDetailsComponent,
    SexDetailComponent,
    SexDetailListComponent,
    ItemDetailsComponent,
    ItemDetailComponent,
    ItemDetailListComponent,
    MainPageComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    CartComponent,
    OrderComponent,
    CategoriesListComponent,
    ListFromCategoryComponent,
    OrderHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgPipesModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers:
    [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    CategoryDetailService,
    BrandDetailService,
    SizeDetailService,
    ColorDetailService,
    SexDetailService,
    ItemDetailService
    ],
  bootstrap: [AppComponent],
  entryComponents: [CategoryDetailComponent, ColorDetailComponent, SizeDetailComponent, BrandDetailComponent, SexDetailComponent]
})
export class AppModule { }
