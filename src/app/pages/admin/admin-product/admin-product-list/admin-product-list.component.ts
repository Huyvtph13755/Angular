import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  product: Product;
  _id: string;
  constructor(private productService: ProductService,
    private toastr: ToastrService
    ) {
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
    }
    this.products = [];
    this._id = ""
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
    console.log(this.products);

  }
  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }
  onDel(_id: string) {
    const confirmDel = confirm("Bạn có chắc chắn muốn xóa không?")
    if (confirmDel && _id) {
      console.log(_id);
      this.productService.delProduct(_id).subscribe((data) => {
        console.log(data);
        this.onGetList();
      })
      this.toastr.success('Thông báo', 'Xóa thành công')
    }
  }
  change(_id: string) {
    this.productService.getProduct(_id).subscribe(data => {
      // gan gia tri cho form, padchValue nhan day du thuoc tinh cua form
      this.product = data
      if (this.product.status == 0) {
        this.product.status = 1;
        this.productService.updateProduct(_id, this.product).subscribe(data => {
          this.onGetList()
        });
        this.toastr.success('Thông báo', 'Cập nhật trạng thái thành công')
      }else if(this.product.status == 1){
        this.product.status = 0;
        this.productService.updateProduct(_id, this.product).subscribe(data => {
          this.onGetList()
        });
        this.toastr.success('Thông báo', 'Cập nhật trạng thái thành công')
      }
    })

  }
}
