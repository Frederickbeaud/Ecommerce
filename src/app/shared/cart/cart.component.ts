import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartIteltems:any[]=[];
  constructor(private serviceCart:CartService){}
  ngOnInit(): void {
   this.cartIteltems = this.serviceCart.getAllCartItems();
  }

}
