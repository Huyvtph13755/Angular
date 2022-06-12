import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  
  constructor(private http:HttpClient) { }
  upload(file: any):Observable<any> {
    const CLOUDINARY_PRESET = 'jkbdphzy';
    const CLOUDINARY_API_URL =
      'https://api.cloudinary.com/v1_1/ecommercer2021/image/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_PRESET);
    return this.http.post(CLOUDINARY_API_URL, formData)
}
}
