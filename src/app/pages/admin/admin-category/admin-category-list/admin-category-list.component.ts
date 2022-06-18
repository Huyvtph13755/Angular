import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/types/Category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  category: Category[];
  cate: Category;
  constructor( private categoryService: CategoryService,
    private toastr: ToastrService
    ) { 
    this.cate = {
      _id: "",
      name: "",
      status: 0
    }
    this.category = []
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
  }
  onGetList() {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
  }
  onDel(_id: string) {
    const confirmDel = confirm("Bạn có chắc chắn muốn xóa không?")
    if (confirmDel && _id) {
      console.log(_id);
      this.categoryService.delCategory(_id).subscribe((data) => {
        console.log(data);
        this.onGetList();
      })
    }
    this.toastr.success('Thông báo', 'Xóa thành công')
  }
  change(_id: string) {
    this.categoryService.getCate(_id).subscribe(data => {
      // gan gia tri cho form, padchValue nhan day du thuoc tinh cua form
      this.cate = data
      if (this.cate.status == 0) {
        this.cate.status = 1;
        this.categoryService.updateCategory(_id, this.cate).subscribe(data => {
          this.onGetList()
        });
        this.toastr.success('Thông báo', 'Cập nhật trạng thái thành công')
      }else if(this.cate.status == 1){
        this.cate.status = 0;
        this.categoryService.updateCategory(_id, this.cate).subscribe(data => {
          this.onGetList()
        });
        this.toastr.success('Thông báo', 'Cập nhật trạng thái thành công')
      }
    })
    
    
  }
}
