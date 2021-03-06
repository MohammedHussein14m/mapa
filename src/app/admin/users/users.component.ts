import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(user => {
      console.log(user);

      this.users = user
    })
  }

}
