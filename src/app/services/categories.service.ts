import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = environment.basedURL + "categories";
  token ;
  headerToken;
  constructor(private http: HttpClient , private authService : AuthService) {
    this.token = this.authService.getToken();
    this.headerToken = new HttpHeaders().set(
      "Authorization",
      "bearer " + this.token
    );
   }

  getCategories() {
    return this.http.get(this.url, {headers : this.headerToken});
  }

  getCategory(id) {
    return this.http.get(`${this.url}/${id}`, {headers : this.headerToken});
  }

  createCategory(category) {
    return this.http.post(this.url, category, {headers : this.headerToken});
  }

  editCategory(category) {
    return this.http.put(`${this.url}/${category.id}`, category, {headers : this.headerToken});
  }

  deleteCategory(id) {
    return this.http.delete(`${this.url}/${id}`, {headers : this.headerToken});
  }
}
