import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url = environment.basedURL;
  token;
  headerToken;
  name;
  isLogin = false;
  isAdmin = false;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("token");
    if (this.token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(this.token);
      this.name = decodedToken.firstName;
      //console.log(decodedToken);
      //this.isAdmin = decodedToken.isAdmin;
      this.isLogin = true;
    }
    this.headerToken = new HttpHeaders().set(
      "Authorization",
      "bearer" + this.token
    );
  }
  getToken() {
    let token = localStorage.getItem("token");
    return token;
  }

  login(user) {
    return this.http.post(this.url + "api/login", user);
  }

  register(user) {
    return this.http.post(this.url + "api/register", user);
  }
  logout() {
    localStorage.clear();
    this.isLogin = false;
    this.isAdmin = false;
  }
}
