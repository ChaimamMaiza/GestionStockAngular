import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './product/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './product/productDetails/product-details/product-details.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { ProvisersListComponent } from './provider/provisers-list/provisers-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AddProductComponent,
    ProvisersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
