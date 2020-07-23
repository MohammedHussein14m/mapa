import { IndexComponent } from "./../index/index.component";
import { CategoriesService } from "src/app/services/categories.service";
import { ProductsService } from "./../services/products.service";
import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { ShoppingCartService } from "../services/shopping-cart.service";
import { EventEmitter } from 'protractor';

@Component({
  selector: "app-home-products",
  templateUrl: "./home-products.component.html",
  styleUrls: ["./home-products.component.css"],
})
export class HomeProductsComponent implements OnInit {
  categories;
  products;
  filteredProducts;
  constructor(
    public productsService: ProductsService,
    public shoppingCartService: ShoppingCartService,
    private router: Router,
    private categoriesService: CategoriesService
  ) {
    this.productsService.getProducts().subscribe((product) => {
      this.products = product;
    });
    this.categoriesService.getCategories().subscribe((category) => {
      //console.log(category);

      this.categories = category;
    });
  }
  addToCart(id) {
    this.shoppingCartService.createCart({ProductId : id}).subscribe((data : any) => {
      //console.log(data);
      this.shoppingCartService.countTotal++;
      //console.log(this.shoppingCartService.countTotal);
    },
    errors => {
      console.log(errors);
    });
  }
  addProductToCart(product){
    const productExistInCart = this.shoppingCartService.cart?.find(({title}) => title === product.title);
    if (!productExistInCart) {
    this.shoppingCartService.cart?.push({...product, num:1})
    console.log(this.shoppingCartService.cart);
      return
    }
    productExistInCart.num += 1;
    this.shoppingCartService.productCount = productExistInCart.num;

  }

  ngOnInit(): void {}
}
