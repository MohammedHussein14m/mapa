import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories;
  products;
  constructor(private productsService: ProductsService,
    private router: Router,
    private categoriesService: CategoriesService) {
    this.productsService.getProducts().subscribe(product => {
      this.products = product;
    })
    this.categoriesService.getCategories().subscribe((category) => {
      console.log(category);

      this.categories = category;
    });
   }
  ngOnInit(): void {
  }

}
