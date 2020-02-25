import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './product/products/products.component';
import { ProductDetailsComponent } from './product/productDetails/product-details/product-details.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProvisersListComponent } from './provider/provisers-list/provisers-list.component';

const routes: Routes = [

  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'products/details/:id', component: ProductDetailsComponent },
  { path: 'products/add', component: AddProductComponent},
  { path: 'providers', component: ProvisersListComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
