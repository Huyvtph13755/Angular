import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() users:any;
  // 1. Định nghĩa sự kiện trả ngược dữ liệu khi edit 
  @Output() handleEdit: EventEmitter<number>
  @Output() handleDel: EventEmitter<number>
  constructor() { 
    // 2. Gán giá trị default
    this.handleEdit = new EventEmitter();
    this.handleDel = new EventEmitter();
   }

  ngOnInit(): void {
  }

    // Xóa
  onDel(id: number) {
    this.handleDel.emit(id);
  }
  // // Sửa  
  onEdit(id: number) {
    this.handleEdit.emit(id);
  }
}
