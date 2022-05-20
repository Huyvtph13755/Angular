import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-validate',
  templateUrl: './show-validate.component.html',
  styleUrls: ['./show-validate.component.css']
})
export class ShowValidateComponent implements OnInit {
  @Input() field:any
  @Input() key:any
  constructor() { }

  ngOnInit(): void {
  }

}
