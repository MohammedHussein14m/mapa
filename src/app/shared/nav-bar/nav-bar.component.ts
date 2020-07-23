import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public authService: AuthService , private router : Router) {
    //console.log(authService.name);

  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
  }

}
