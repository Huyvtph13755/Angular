import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from 'src/types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {  }
  getCategory(): Observable <Category[]>{
    return this.http.get<Category[]>(environment.category)
  }
  getCate(id: string): Observable <Category> {
    return this.http.get<Category>(`${environment.category}/${id}`);
  }
  delCategory(_id: string | number): Observable <any>{
    return this.http.delete(`${environment.category}/${_id}`)
  }

  createCategory(data : Category) : Observable<Category>{
    return this.http.post<Category>(`${environment.category}`, data)
  }

  updateCategory(id: number | string, data: Category): Observable<Category>{
    return this.http.put<Category>(`${environment.category}/${id}`, data)
  }
}
