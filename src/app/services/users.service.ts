import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.basedURL + "users";
  token ;
  headerToken;
  constructor(private http : HttpClient, private authService : AuthService) {
    this.token = this.authService.getToken();
    this.headerToken = new HttpHeaders().set(
      "Authorization",
      "bearer " + this.token
    );
  }

  getUsers() {
    return this.http.get(this.url, {headers : this.headerToken});
  }
  getUser(id) {
    return this.http.get(`${this.url}/${id}`, {headers : this.headerToken});
  }
  createUser(User) {
    return this.http.post(this.url, User, {headers : this.headerToken});
  }
  editUser(User) {
    return this.http.put(`${this.url}/${User.id}`, User, {headers : this.headerToken});
  }

  deleteUser(id) {
    return this.http.delete(`${this.url}/${id}`, {headers : this.headerToken});
  }
}
