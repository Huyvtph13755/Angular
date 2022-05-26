import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formVal = {
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
  onSubmitUser(newUser: any) {
    console.log(newUser);
    if (newUser.id == 0) {
      const userIds = this.users.map(user => user.id).sort((a, b) => (b - a));
      const newId = userIds[0];
      return this.users.push({
        id: newId + 1,
        ...newUser,
      });
    }
    return this.users.forEach((users, index) => {
      if (users.id === newUser.id) {
        this.users[index] = newUser;
      }
    });
  }
  onEditUser(id: number) {
    console.log(id);
    const editUser = this.users.find(user => user.id === id);
    if (editUser) {
      this.formVal = { ...editUser };
    }
  }
  onDelUser(id: number) {
    if (id) {
      this.users = this.users.filter(user => user.id !== id);
      console.log(this.users);
    }
  }
}
