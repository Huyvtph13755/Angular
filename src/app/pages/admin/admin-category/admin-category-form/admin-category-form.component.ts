import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  categoryForm: FormGroup;
  categoryId: string
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', Validators.required)
    })
    this.categoryId = ""
  }

  ngOnInit(): void {
    this.categoryId = this.activateRoute.snapshot.params['_id'];
    console.log(this.categoryId);
    this.categoryService.getCate(this.categoryId).subscribe(data => {
      // gan gia tri cho form, padchValue nhan day du thuoc tinh cua form
      this.categoryForm.patchValue({
        name: data.name
      })
    })
  }
  onSubmit() {
    const submitData = this.categoryForm.value;

    if (this.categoryId !== '0' && this.categoryId !== undefined) {
      return this.categoryService.updateCategory(this.categoryId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/category');
        this.toastr.success('Thông báo', 'Cập nhật danh mục thành công')
      });

    }
    // 2. Call API (Cần định nghĩa service và router điều hướng)

    return this.categoryService.createCategory(submitData).subscribe((data) => {
      // 3. Sau khi API call thành công sẽ điều hướng về danh sách
      // this.router.navigate(['/admin', 'products']);
      this.router.navigateByUrl('/admin/category');
      this.toastr.success('Thông báo', 'Thêm danh mục thành công')
    })
  }
}
