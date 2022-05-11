import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-app';
  name = 'Huy';
  class = 'WE16301';
  students = [
    {name: 'Huy', msv: 'ph13755'},
    {name: 'Huy1', msv: 'ph137551'},
    {name: 'Huy2', msv: 'ph137552'},
    {name: 'Huy3', msv: 'ph137553'},
    {name: 'Huy4', msv: 'ph137554'},
    {name: 'Huy5', msv: 'ph137555'}
  ]
}
