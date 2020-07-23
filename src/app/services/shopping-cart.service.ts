import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  productCount;
  cart = [];
  countTotal: number = 0;
  url = environment.basedURL + "carts";
  token ;
  headerToken;
  constructor(private http: HttpClient , private authService : AuthService) {
    this.token = this.authService.getToken();
    this.headerToken = new HttpHeaders().set(
      "Authorization",
      "bearer " + this.token
    );
   }

  addToCart(productId){
    return this.http.post(this.url, productId, {headers : this.headerToken})
  }
  getCarts() {
    return this.http.get(this.url, {headers : this.headerToken});
  }
  getCart(id) {
    return this.http.get(`${this.url}/${id}`, {headers : this.headerToken});
  }

  createCart(cart) {
    return this.http.post(this.url, cart, {headers : this.headerToken});
  }

  editCart(cart) {
    return this.http.put(`${this.url}/${cart.id}`, cart, {headers : this.headerToken});
  }

  deleteCart(id) {
    return this.http.delete(`${this.url}/${id}`, {headers : this.headerToken});
  }
}
