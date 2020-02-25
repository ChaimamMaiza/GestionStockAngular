import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private baseUrl = 'http://localhost:8080/products';


   headers = new HttpHeaders()
  .set("Access-Control-Allow-Origin", "*")
  .set("Access-Control-Allow-Methods","*")
  .set("Access-Control-Allow-Headers","*")

  constructor(private http: HttpClient) {


   }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`,{headers :this.headers});
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/product/${id}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/product/${id}`, { responseType: 'text' });

  }


  createProduct(product: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/product/`, product);
  }

}
