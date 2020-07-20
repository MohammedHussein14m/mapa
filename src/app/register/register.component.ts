import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  firstName;
  lastName;
  email;
  password;
  constructor(private authService: AuthService, private router: Router) {}
  onSubmit() {
    this.authService
      .register({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      })
      .subscribe((data: any) => {
        console.log(data);

        this.authService.isLogin = true;
        //this.authService.isAdmin = data.isAdmin;
        this.authService.token = data;
        localStorage.setItem("token", data);
        //localStorage.setItem("isAdmin", data.isAdmin);
        this.router.navigateByUrl("/");
      });
  }
  ngOnInit(): void {}
}
