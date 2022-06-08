import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  _id: string;
  constructor(private productService: ProductService) { 
    this.products = [];
    this._id = ""
   }

  ngOnInit(): void {
    this._id = "0"
    this.productService.getProductFilter(this._id).subscribe((data) => {
      this.products = data;
    })
    console.log(this.products);
    
  }
  onGetList() {
    this._id = "0"
    this.productService.getProductFilter(this._id).subscribe((data) => {
      this.products = data;
    })
    console.log(this.products);
  }
  onDel(_id: string){
    const confirmDel = confirm("Bạn có chắc chắn muốn xóa không?")
    if(confirmDel && _id){
      console.log(_id);
      this.productService.delProduct(_id).subscribe((data) => {
        console.log(data);
        this.onGetList();
      })
    }
  }
}
