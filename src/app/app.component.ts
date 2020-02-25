import { Component } from '@angular/core';
import{ ProductService } from '../app/Services/product.service';
import axios from "axios";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GestionStock-Angular';
  private productService: ProductService;
  private baseUrl = 'http://localhost:8080/products';


  constructor( ) {
  }




   ngOnInit() {

   }



}
