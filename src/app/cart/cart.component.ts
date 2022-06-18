import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/types/Product';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ProductCart[];
  cartItemValues: number = 0;
  constructor(private lsService: LocalStorageService) {
    this.cartItems = [];
   }

  ngOnInit(): void {
    this.onSetCart();
    // Khi setItem được chạy, thì next('') cũng được chạy -> có thể subscribe được
    this.lsService.watchStorage().subscribe(data => {
      this.onSetCart();
    })
  }
  onSetCart() {
    this.cartItems = this.lsService.getItem();
    this.cartItemValues = this.cartItems.reduce((a, b) => a + b.value, 0);
    console.log(this.cartItemValues);
  }
}
