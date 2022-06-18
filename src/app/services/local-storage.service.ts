import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCart } from 'src/types/Product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  // 1. Định nghĩa việc lắng nghe thay đổi bằng cách khởi tạo 1 Subject
  // Trong subject sẽ có phương thức bắt sự kiện thay đổi để phát hành động tiếp theo
  private storageSubject = new Subject<string>();

  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }
  // Tất cả các xử lý của ls sẽ thực hiện ở đây, để kích hoạt việc lắng nghe

  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  setItem(addItem: ProductCart) {
    // Nghiệp vụ thêm sp vào giỏ
    // 1. Lấy ra toàn bộ sp trong giỏ
    const cartItems = this.getItem();
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
    // 3. Sau khi thêm sản phẩm vào giỏ bằng phương thức setItem này
    this.storageSubject.next('');
    // thì watchStorage sẽ được phát sự kiện vào subscibe
  }
  removeItem(_id: string) {
    const cartItems = this.getItem();
    const afterCart = cartItems.filter((item: ProductCart) => item._id !== _id)
    localStorage.setItem('cart', JSON.stringify(afterCart));
    this.storageSubject.next('');
  }
  decreaseQuantity(_id: string) {
    var cartItems = this.getItem();
    const currentProduct = cartItems.find((item: ProductCart) => item._id === _id);
    currentProduct.value--;
    if (currentProduct.value < 1) {
      const confirm = window.confirm("Bạn có muốn xóa sản phẩm không?");
      if (confirm) {
        cartItems = cartItems.filter((item: ProductCart) => item._id !== _id);
      }
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.storageSubject.next('');
  }
  increaseQuantity(_id: string){
    var cartItems = this.getItem();
    cartItems.find((item: ProductCart) => item._id === _id).value++;
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.storageSubject.next('');
  }
}
