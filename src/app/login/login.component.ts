import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  onSubmit() {
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe(
        (data: any) => {
          console.log(data);
           this.authService.isLogin = true;
           localStorage.setItem("token", data.token);
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(data.token);
          console.log(decodedToken);
          this.authService.name = decodedToken.firstName;
          this.authService.isAdmin = decodedToken.isAdmin;
          // this.authService.isAdmin = data.isAdmin;
          // this.authService.token = data.token;
          // console.log(data.token);
          localStorage.setItem("token", data.token);
          // localStorage.setItem("isAdmin", data.isAdmin);
          this.router.navigateByUrl("/");
          // this.toastr.success("Successfuly loggedin!");
        },
        (err) => {
          this.toastr.error("User Not Found!");
        }
      );
  }
  ngOnInit(): void {}
}
