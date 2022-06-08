import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  loggedInUser = JSON.parse(localStorage.getItem('user') as string);
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  
  }
  onLogout(){
    localStorage.removeItem('user');
    location.reload()
  }
}
