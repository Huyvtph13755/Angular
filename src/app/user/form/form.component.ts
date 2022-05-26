import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output() handleSubmit: EventEmitter<any>
  @Input() inputVal: any;
  constructor() {
    this.handleSubmit = new EventEmitter();
  }

  ngOnInit(): void {
  }
  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    this.handleSubmit.emit(userForm.value); //bắn dữ liệu, tương tự Input nhưng theo chiều ngược lại
    // console.log(userForm.value.id);

    // // 0. Tìm id lớn nhất 
    // const newUsers = this.users.map(user => user.id).sort((a: number, b: number) => b - a);
    // console.log(newUsers);
    // const maxId = newUsers[0];
    // // 1. Push dữ liệu mới vào mảng
    // if (userForm.value.id === 0) {
    //   this.users.push({
    //     ...userForm.value,
    //     id: maxId + 1
    //   })
    // } else {
    //   this.inputVal = ({
    //     ...userForm.value,
    //     id: this.inputVal.id
    //   })
    // }
    // 2. Cập nhật lại giá trị của this.inputVal về default
    userForm.resetForm({
      id: 0,
      name: "",
      age: 0,
      email: "",
      sdt: 0
    })
  }
  // Xóa
  // onDel(id: number) {
  //   this.users = this.users.filter(item => item.id !== id);
  // }
  // // Sửa  
  // onEdit(user: any, id: number) {
  //   this.inputVal = user.find((item: any) => item.id === id)
  // }
}
