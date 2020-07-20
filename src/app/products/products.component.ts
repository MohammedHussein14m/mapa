import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  constructor(private productsService : ProductsService) {
    this.productsService.getProducts().subscribe(product => {
      this.products = product;
    })
   }

  ngOnInit(): void {
  }

}
