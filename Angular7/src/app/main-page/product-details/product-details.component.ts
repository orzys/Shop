import { HomeComponent } from './../../home/home.component';
import { ItemDetail } from './../../shared/item-detail.model';
import { ItemDetailService } from './../../shared/item-detail.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetail } from 'src/app/shared/product-detail.model';
import { ProductDetailService } from 'src/app/shared/product-detail.service';
import { NgPipesModule } from 'ngx-pipes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {
  private specifiedName: ItemDetail[]
  private product: ProductDetail = null
  QuantityToCart: any

  constructor(
    public itemService: ItemDetailService,
    public productService: ProductDetailService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  userDetails;
  productInCartQuantity = 0;
  cartArray: any
  amountToPay: number = 0;
  quantityInCart = 0;

  ngOnInit() {
    console.log(this.productService);
  }



  backToShop(){
    this.router.navigate(["shop"]);
  }

    addToCart(id: number) {
      console.log(id);
      var cartArray = JSON.parse(localStorage.getItem('itemsFromCartArray')) || [];
      console.log("Cart array: "+cartArray);
      cartArray = this.mergeProductsInCart(cartArray, id);
      console.log("Cart array: "+cartArray);
      localStorage.setItem('itemsFromCartArray', JSON.stringify(cartArray));
      this.productService.onAddToCartEvent.emit(cartArray.length);
      console.log("Product set to local storage");
    }



    mergeProductsInCart(cartArray, id) {
      var duplicate = false;
      if (cartArray != null) {
        for (var i = 0; i < cartArray.length; i++) {
          if (cartArray[i].name == id.ItemName) {
            duplicate = true;
            var quantity = parseInt(cartArray[i].quantity);
            quantity += parseInt(this.QuantityToCart);
            cartArray[i].quantity = quantity;
          }
        }
        if (duplicate == false){
          cartArray.push({
            "id": id.ItemID,
            "name": id.ItemName,
            "quantity": this.QuantityToCart,
            "description": id.ItemDescription,
            "image": id.ItemImage,
            "brand": id.BrandName,
            "sex": id.SexName,
            "category": id.CategoryName,
            "color": id.ColorName,
            "size": id.SizeName,
            "price": id.ItemPrice
          });
          console.log("quantity " + this.QuantityToCart);
          console.log("nie duplikat")
          this.toastr.success('Item added to your cart!', 'Cart');
        } else this.toastr.info('This item is already in your cart!', 'Cart')
      } else {
        cartArray.push({
            "id": id.ItemID,
            "name": id.ItemName,
            "quantity": this.QuantityToCart,
            "description": id.ItemDescription,
            "image": id.ItemImage,
            "brand": id.BrandName,
            "sex": id.SexName,
            "category": id.CategoryName,
            "color": id.ColorName,
            "size": id.SizeName,
            "price": id.ItemPrice
        });
        console.log("quantity " + this.QuantityToCart);
      }
      return cartArray;
    }
  }


