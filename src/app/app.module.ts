import { UsersService } from "./services/users.service";
import { CategoriesService } from "src/app/services/categories.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { AboutComponent } from "./about/about.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ProductsComponent as AdminProductsComponent } from "./admin/products/products.component";
import { UsersComponent } from "./admin/users/users.component";
import { AddProductComponent } from "./admin/add-product/add-product.component";
import { EditProductComponent } from "./admin/edit-product/edit-product.component";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./product/product.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductsService } from "./services/products.service";
import { from } from "rxjs";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './index/index.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AboutComponent,
    CheckoutComponent,
    AdminProductsComponent,
    UsersComponent,
    AddProductComponent,
    EditProductComponent,
    ProductsComponent,
    ProductComponent,
    IndexComponent,
    NavBarComponent,
    HomeProductsComponent,
    FooterComponent,
    ShoppingCartComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
  ],
  providers: [ProductsService, CategoriesService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
