import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  
  username: string = "";
  
  ngOnInit(): void {
  }

  login(){
    this.authService.login();
  }

  loginAdmin(){
    this.authService.loginAdmin();
  }

}
