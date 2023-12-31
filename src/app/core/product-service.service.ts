import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  baseUrl='http://localhost:8082/produits';
  product :any[] = [];
  constructor(private http:HttpClient) { }
  getAllProduct(): Observable<any>{
    return this.http.get(this.baseUrl);
    }
  
}
