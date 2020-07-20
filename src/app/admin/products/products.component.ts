import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  constructor(private productService : ProductsService) {
    this.productService.getProducts().subscribe(product => {
      this.products = product;
    })
   }
   deleteProduct(id){
    this.productService.deleteProduct(id).subscribe(data => {
      this.products = this.products.filter(p => {
        return p.id !== id
      })
    })
   }

  ngOnInit(): void {
  }

}
