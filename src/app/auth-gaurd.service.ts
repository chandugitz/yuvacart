import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class AuthGaurdService implements CanActivate {

  constructor(private _appService: AppService, private _router: Router) { }

  canActivate(): boolean{
    if(this._appService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/sign-in'])
      return false
    }
  }
}
