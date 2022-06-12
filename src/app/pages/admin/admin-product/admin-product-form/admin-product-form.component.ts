import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private fileUploadService: FileUploadService
  ) {
    this.imgOld = "";
    this.img = ""
    this.shortLink = "";
    this.loading = false;
    this.file = "";
    this.category = [];
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32),
      this.onValidateNameHasProduct //custom
      ]),
      category: new FormControl(''),
      author: new FormControl(''),
      image: new FormControl(''),
      price: new FormControl(''),
      sale_price: new FormControl(''),
      desc: new FormControl(''),

    })
    this.productId = "0";
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
    this.productId = this.activateRoute.snapshot.params['_id'];
    console.log(this.productId);
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
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    const { value } = control;
    if (!value.includes('product')) {
      return { hasProductErr: true };
    }
    // trả về kq nếu không lỗi
    return null;

  }
  onSubmit() {
    const submitData = this.productForm.value;
    if (this.file == "") {
      submitData.image = this.imgOld;
    } else {
      submitData.image = this.img
    }
    console.log(submitData.image);

    if (this.productId !== '0' && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products');
      });
    }
    return this.productService.createProduct(submitData).subscribe((data) => {
      this.router.navigateByUrl('/admin/products');
    })
  }
}
