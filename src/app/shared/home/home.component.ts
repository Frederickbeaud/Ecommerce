import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../../core/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  prods:any[]=[];
  constructor(private prodService:ProductServiceService){}
  ngOnInit():void {
    this.prodService.getAllProduct().subscribe(data => {
      console.log(data);
      this.prods=data["_embedded"]["produits"]});
  }
}
