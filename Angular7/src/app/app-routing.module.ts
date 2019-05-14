import { CartComponent } from './cart/cart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ColorDetailsComponent } from './color-details/color-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { SizeDetailsComponent } from './size-details/size-details.component';
import { SexDetailsComponent } from './sex-details/sex-details.component';
import { ProductDetailsComponent } from './main-page/product-details/product-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/user/login', pathMatch: 'full'},
  {path: 'user', component: UserComponent,
    children: [
      {path: 'registration', component: RegistrationComponent},
      {path: 'login', component: LoginComponent}
    ]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'categories', component: CategoryDetailsComponent},
  {path: 'brands', component: BrandDetailsComponent},
  {path: 'sizes', component: SizeDetailsComponent},
  {path: 'colors', component: ColorDetailsComponent},
  {path: 'sexes', component: SexDetailsComponent},
  {path: 'items', component: ItemDetailsComponent},
  {path: 'shop', component: MainPageComponent},
  {path: 'cart', component: CartComponent},
    // children: [
    //   {path: 'details/:id', component: ProductDetailsComponent}
    // ]},
  {path: 'shop/details/:name', component: ProductDetailsComponent},
  {path: 'adminpanel', component: AdminPanelComponent, canActivate: [AuthGuard], data : {permittedRoles: ['Admin']}}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
