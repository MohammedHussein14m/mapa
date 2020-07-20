import { ProductsService } from "./../../services/products.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CategoriesService } from "src/app/services/categories.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent implements OnInit {
  categories;
  createProductForm = new FormGroup({
    title: new FormControl("", Validators.required),
    subTitle: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    CategoryId: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
  });
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private categoriesService: CategoriesService
  ) {
    this.categoriesService.getCategories().subscribe((category) => {
      console.log(category);

      this.categories = category;
    });
  }
  onSubmit(product) {
    this.productsService
      .createProduct(product)
      .subscribe((p) => this.router.navigate(["/admin/products"]));
  }

  ngOnInit(): void {}
}
