// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService) { }

//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
//     : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (this.authService.isAuthenticate) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

import { Injectable } from '@angular/core';import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';@Injectable({  providedIn: 'root'})export class AuthGuard implements CanActivate {  routes: any;  canActivate(    route: ActivatedRouteSnapshot,    state: RouterStateSnapshot): boolean {    //return false; 
   if(localStorage.getItem('username')!= null){
        console.log("testing....");      return true;             }        else        {          console.log("testingwrong....");          this.routes.navigate(['home']);          return false;        }  }  }