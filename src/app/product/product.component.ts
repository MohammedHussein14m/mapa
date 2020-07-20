import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product;
  constructor(private productsService : ProductsService , private route : ActivatedRoute) {
    this.productsService.getProduct(this.route.snapshot.params.id).subscribe(p => {
      this.product = p[0];
      //console.log(p);

    })
    //console.log(this.product);

   }

  ngOnInit(): void {
  }

}
