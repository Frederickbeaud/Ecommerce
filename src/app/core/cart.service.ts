import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts:any[]=[];
  cartSubject = new Subject();
  constructor() { }
  addProductToCart(prod:any){
    let currentProd = {...prod,count:1};
    this.cartProducts.push(currentProd);
    this.cartSubject.next(this.cartProducts);
  }
  getAllCartItems(){
    return this.cartProducts;
  }
  getPriceDetailsInCartItem(product:any){
    let priceDetails = {discountedPrice:(product.price*product.count)-(product.discount)/100*(product.price*product.count),
  price:product.price*product.count};
  return priceDetails;
  }
  incProdCount(product:any){
    let index = this.cartProducts.findIndex((item)=>{
      return item.id;
    });
    this.cartProducts[index].count++;
    this.getPriceDetailsInCartItem(product);
    this.cartSubject.next(this.cartProducts);
  }
  decProdCount(product:any){
    let index = this.cartProducts.findIndex((item)=>{
      return item.id;
    });
    this.cartProducts[index].count--;
    this.getPriceDetailsInCartItem(product);
    this.cartSubject.next(this.cartProducts);
  }
  removeItemFromCart(product:any){
    let removeConfirme = window.confirm("Are you sure?");
    if(removeConfirme){
      let index = this.cartProducts.findIndex((item)=>{
        return item.id == product.id;
      });
      this.cartProducts.splice(index,1);
      this.cartSubject.next(this.cartProducts);
    }
  }
}

