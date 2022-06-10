import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl("", Validators.email),
      password: new FormControl("")
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(data => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data))
      localStorage.getItem('user')
      this.router.navigateByUrl('/')
    })
  }
}
