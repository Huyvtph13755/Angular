import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  loggedInUser = JSON.parse(localStorage.getItem('user') as string);
  ngOnInit(): void {
  }
  onLogout(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/')
  }
}
