import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGaurdService implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/sign-in'])
      return false
    }
  }
}
