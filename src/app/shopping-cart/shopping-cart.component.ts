import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart;
  constructor(public shoppingCartService: ShoppingCartService) {
    this.shoppingCartService.getCarts().subscribe(data => console.log(data)
    )
   }

  ngOnInit(): void {
  }

}
