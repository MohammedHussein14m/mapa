import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  url = environment.basedURL + "products";
  token ;
  headerToken;
  filteredProducts;
  constructor(private http: HttpClient, private authService : AuthService) {
    this.token = this.authService.getToken();
    this.headerToken = new HttpHeaders().set(
      "Authorization",
      "bearer " + this.token
    );
  }

  getProducts() {
    return this.http.get(this.url, {headers : this.headerToken});
  }
  getProduct(id) {
    return this.http.get(`${this.url}/${id}`, {headers : this.headerToken});
  }
  createProduct(product) {
    return this.http.post(this.url, product, {headers : this.headerToken});
  }
  editProduct(product) {
    return this.http.put(`${this.url}/${product.id}`, product, {headers : this.headerToken});
  }

  deleteProduct(id) {
    return this.http.delete(`${this.url}/${id}`, {headers : this.headerToken});
  }
}
