import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/types/Category';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  category: Category[];
  // Variable to store shortLink from api response
  shortLink: string;
  loading: boolean; // Flag variable
  file: string; // Variable to store file
  img: string;
  imgOld: string
  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private fileUploadService: FileUploadService,
    private toastr: ToastrService
  ) {
    this.imgOld = "";
    this.img = ""
    this.shortLink = "";
    this.loading = false;
    this.file = "";
    this.category = [];
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required,
      Validators.minLength(6)
      ]),
      category: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required),
      image: new FormControl(''),
      price: new FormControl('', Validators.required),
      sale_price: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),

    })
    this.productId = "0";
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
    this.productId = this.activateRoute.snapshot.params['_id'];
    this.productService.getProduct(this.productId).subscribe(data => {
      this.imgOld = data.image
      // gan gia tri cho form, padchValue nhan day du thuoc tinh cua form
      this.productForm.patchValue({
        name: data.name,
        category: data.category,
        author: data.author,
        price: data.price,
        sale_price: data.sale_price,
        desc: data.desc,
        image: data.image
      })
    })
  }

  onChange(event: any) {
    this.file = event.target.files[0];
    this.fileUploadService.upload(this.file).subscribe((data) => {
      this.img = data.secure_url
    })
  }
  onSubmit() {
    const submitData = this.productForm.value;
    if (this.file == "") {
      submitData.image = this.imgOld;
    } else {
      submitData.image = this.img
    }
    console.log(submitData);

    if (this.productId !== '0' && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products');
        this.toastr.success('Thông báo', 'Cập nhật sản phẩm thành công')
      });
    }
    return this.productService.createProduct(submitData).subscribe((data) => {
      this.router.navigateByUrl('/admin/products');
      this.toastr.success('Thông báo', 'Thêm sản phẩm thành công')
    })
    
  }
}
