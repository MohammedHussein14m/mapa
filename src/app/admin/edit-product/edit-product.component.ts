import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  categories;
  product;
  editProductForm = new FormGroup({
    title: new FormControl("", Validators.required),
    subTitle: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
    id: new FormControl(""),
  });

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router,
    private categoriesService :CategoriesService
  ) {

    this.categoriesService.getCategories().subscribe((category) => {
      console.log(category);
      this.categories = category;
    });

    this.productService
      .getProduct(this.route.snapshot.params.id)
      .subscribe((data: any) => {
        this.product = data[0];
        console.log(this.product);
        //console.log(data);
        this.editProductForm.controls.title.setValue(data[0].title);
        this.editProductForm.controls.subTitle.setValue(data[0].subTitle);
        this.editProductForm.controls.category.setValue(data[0].category);
        this.editProductForm.controls.id.setValue(data[0].id);
        this.editProductForm.controls.price.setValue(data[0].price);
        this.editProductForm.controls.description.setValue(data[0].description);
        this.editProductForm.controls.image.setValue(data[0].image);
      });
  }
  onSubmit() {
    this.productService
      .editProduct(this.editProductForm.value)
      .subscribe((p) => this.router.navigate(["/admin/products"]));
  }

  ngOnInit(): void {
  }

}
