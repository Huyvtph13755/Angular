import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreateType } from 'src/types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable <Product[]> {
    return this.http.get<Product[]>(environment.productss)
  }
  getProductFilter(id: string): Observable <Product[]> {
    return this.http.get<Product[]>(`${environment.products}/${id}`)
  }
  getProduct(id: string): Observable <Product> {
    return this.http.get<Product>(`${environment.productss}/${id}`);
  }
  delProduct(_id: string | number): Observable <any>{
    return this.http.delete(`${environment.productss}/${_id}`)
  }

  createProduct(data : ProductCreateType) : Observable<Product>{
    return this.http.post<Product>(`${environment.productss}`, data)
  }

  updateProduct(id: number | string, data: ProductCreateType): Observable<Product>{
    return this.http.put<Product>(`${environment.productss}/${id}`, data)
  }
}
