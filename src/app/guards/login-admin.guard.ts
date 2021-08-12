import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router){}
  
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userName = localStorage.getItem("username");
    if (userName != 'ryan64128' && userName != 'admin'){
      this.router.navigate(['/login']);
    }
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let userName = localStorage.getItem("username");
    if (userName != 'admin'){
      this.router.navigate(['/employees']);
      alert("Sorry, you are not an Admin");
    }
    return true;
  }
  
}
