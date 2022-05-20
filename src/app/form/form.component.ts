import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputVal = {
    id: 0,
    name: "",
    age: 0,
    email: "",
    sdt: 0
  }
  users = [
    {
      id: 3,
      name: "Huy",
      age: 12,
      email: "huy@gmail.com",
      sdt: 124
    },
    {
      id: 2,
      name: "Huy",
      age: 12,
      email: "huy@gmail.com",
      sdt: 124
    }
  ]
  onSubmit(userForm: NgForm) {
    console.log(userForm.value.id);
    
    // 0. Tìm id lớn nhất 
    const newUsers = this.users.map(user => user.id).sort((a: number, b: number) => b - a);
    console.log(newUsers);
    const maxId = newUsers[0];
    // 1. Push dữ liệu mới vào mảng
    if(userForm.value.id===0){
      this.users.push({
        ...userForm.value,
        id:maxId+1
      })
    }else{
      this.inputVal=({
        ...userForm.value,  
        id:this.inputVal.id 
      })
    }
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
  onDel(id: number) {
    this.users = this.users.filter(item => item.id !== id);
  }
  // Sửa  
  onEdit(user:any, id:number){
    this.inputVal= user.find((item:any)=>item.id === id)
  }
}
