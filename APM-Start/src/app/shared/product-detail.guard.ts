import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //return route.paramMap.get("id") === '2';
    let id = +route.url[1].path
    if (isNaN(id) || id < 1) {
      alert('Invalid product id')
      this.router.navigate(['/products'])
      return false
    }
    return true
  }
}
