import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Observable<Product[]>;

  productList : Product[] = [];

  constructor(private productService: ProductService , private router: Router) { }


  ngOnInit() {
    this.products =this.productService.getProductList()
    console.error("test : ", this.products)
  }

  getProds() {
    this.productService.getProductList().subscribe((productsList: Product[]) => {
      this.productList = productsList;
    })
  }


  productDetails(id: number){
    this.router.navigate(['products/details', id]);
  }


  productDelete (id : number)
  {
    let sum = 0;
    this.productService.deleteProduct(id)
    .subscribe(
      data => {console.log(data);
      },
      (error: HttpErrorResponse) => console.log(error.message),
    () => {
        console.log(sum);
    })

  }

AddProduct(){
  this.router.navigate(['products/add']);
}





}

