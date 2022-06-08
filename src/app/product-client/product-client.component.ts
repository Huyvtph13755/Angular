import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/types/Category';
import { Product } from 'src/types/Product';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-client',
  templateUrl: './product-client.component.html',
  styleUrls: ['./product-client.component.css']
})
export class ProductClientComponent implements OnInit {
  _id: string;
  products: Product[];
  category: Category[]
  constructor(private categoryService: CategoryService, private productService: ProductService, private activateRoute: ActivatedRoute, private router:Router) {
    this.category = [];
    this.products = [];
    this._id = "";
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }
  onGetListCate(_id : string) {
    // this._id = this.activateRoute.snapshot.params["_id"];
    this.productService.getProductFilter(_id).subscribe((data) => {
      this.products = data;
    })
  }
  onSelect(_id:string){
    this.onGetListCate(_id);
    this.router.navigateByUrl(`/products/${_id}`)
  }
}
