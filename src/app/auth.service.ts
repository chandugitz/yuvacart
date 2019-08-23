import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _registerUrl = 'http://yuvakart.mathrusriinfotech.in/api/users';
  public _loginUrl = 'http://yuvakart.mathrusriinfotech.in/api/auth';

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    console.log('triggered!')
    localStorage.removeItem('token')
    this._router.navigate(['/sign-in'])
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
