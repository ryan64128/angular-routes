import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string = "";
  constructor(private router: Router) { }
  login(){
    this.username = "ryan64128";
    localStorage.clear();
    localStorage.setItem("username", this.username);
    this.router.navigate(['/']);
  }

  logout(){
    this.username = "";
    localStorage.clear();
    this.router.navigate(['/']);
  }

  loginAdmin(){
    this.username = "admin";
    localStorage.clear();
    localStorage.setItem("username", this.username);
    this.router.navigate(['/']);
  }

  getUsername(): string{
    return this.username
  }
}
