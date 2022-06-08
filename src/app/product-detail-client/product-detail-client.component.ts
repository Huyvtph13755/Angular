import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductCart } from 'src/types/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail-client',
  templateUrl: './product-detail-client.component.html',
  styleUrls: ['./product-detail-client.component.css']
})
export class ProductDetailClientComponent implements OnInit {
  _id: string;
  product: Product;
  cartValue: number;
  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute
  ) {
    this._id = '';
      this.product = {
        _id: "",
        author: "",
        name: "",
        price: 0,
        image: "",
        sale_price: 0,
        desc: "",
        category: "",
        status: 0
      };
      this.cartValue = 1
  }

  ngOnInit(): void {
    this._id = this.activateRoute.snapshot.params['_id']
    console.log(this._id);
    this.productService.getProduct(this._id).subscribe((data) => {
      this.product = data
      console.log(this.product);
    })
    
    
  }
  onChangeCartValue(event: any) {
    this.cartValue = event.target.value;
  }

  onAddToCart() {  
    const addItem = {
      ...this.product,
      value: +this.cartValue
    };
    // 1. Lấy ra toàn bộ sp trong giỏ
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    // 2. kiểm tra trong giỏ đã có phần tử có id giống cartItem chưa
    const existItem = cartItems.find((item: ProductCart) =>
      item._id === addItem._id
    );
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.value += addItem.value;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.cartValue = 1;
  }

}
