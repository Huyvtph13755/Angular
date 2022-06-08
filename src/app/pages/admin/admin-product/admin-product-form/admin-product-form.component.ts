import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm : FormGroup;
  productId: string;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        this.onValidateNameHasProduct //custom
      ])
    })
    this.productId = "0";
  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['_id'];
    console.log(this.productId);
    
    this.productService.getProduct(this.productId).subscribe(data => {
      // gan gia tri cho form, padchValue nhan day du thuoc tinh cua form
      this.productForm.patchValue({
        name:data.name
      })
    })
  }

  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null{
    console.log('custom validate', control.value);
    // lấy ra val của FormControl name hiện tại
    const {value} = control;
    if(!value.includes('product')){
      return {hasProductErr: true};
    }
    // trả về kq nếu không lỗi
    return null;
    
  }
  onSubmit(){
    console.log(this.productForm.get('name'));
    // lay du lieu tu form
    const submitData = this.productForm.value
    // call API
    this.productService.createProduct(submitData).subscribe((data)=>{
      this.router.navigate(['/admin', 'products']);
      // this.router.navigateByUrl('/admin/products')
    })
  }
}
