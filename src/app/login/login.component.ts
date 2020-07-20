import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }
  onSubmit(){
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe((data: any) => {
          this.authService.isLogin = true;
          //this.authService.isAdmin = data.isAdmin;
          this.authService.token = data;
          localStorage.setItem("token", data);
          //localStorage.setItem("isAdmin", data.isAdmin);
          this.router.navigateByUrl('/');
          this.toastr.success("Successfuly loggedin!");
      } , (err) => {
        this.toastr.error("User Not Found!");
      });
  }
  ngOnInit(): void {

  }

}
