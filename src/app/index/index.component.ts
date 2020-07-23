import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from './../services/products.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  categories;
  products;
  filteredProducts;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private categoriesService: CategoriesService
  ) {
    this.categoriesService.getCategories().subscribe((category) => {
      //console.log(category);
      this.categories = category;
    });
    this.productsService.getProducts().subscribe((p :any) => {
      this.products = this.filteredProducts = p ;
      this.productsService.filteredProducts = this.filteredProducts;
    })
  }

  ngOnInit(): void {
    this.filteredProducts;
  }
  filter(category){
    //console.log(this.products);
    this.filteredProducts =this.products.filter(p => p.Category.name == category)
    //console.log(this.filteredProducts);
    this.productsService.filteredProducts = this.filteredProducts;

  }
  all(){
    this.productsService.filteredProducts = this.products
  }

}
