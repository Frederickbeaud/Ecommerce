import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent implements OnInit{
  @Input() item:any;
  discountedPrice:any;
  itemPrice:any;
 constructor( private cartService:CartService){}
  ngOnInit(): void {
    this.getPriceDetails(this.item);
  }
 getPriceDetails(item:any){
  this.discountedPrice = this.cartService.getPriceDetailsInCartItem(item).discountedPrice;
  this.itemPrice = this.cartService.getPriceDetailsInCartItem(item).price;
 }
 decItemCount(item:any){
  this.cartService.decProdCount(item);
 }
 IncItemCount(item:any){
  this.cartService.incProdCount(item);
 }
 removeItem(item:any){

 }
}
