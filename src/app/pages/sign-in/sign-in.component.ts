import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { emailValidator, matchingPasswords } from '../../theme/utils/app-validators';
import { AuthService } from '../../auth.service';




@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, public router:Router, public snackBar: MatSnackBar, private _auth: AuthService) { }
  loginForm: FormGroup;
  registerForm: FormGroup;

  // login and and response declarations
  public loginUrl = 'http://yuvakart.mathrusriinfotech.in/api/auth';
  public loginResponse: any;
  // register and and response declarations
  public registerUrl = 'http://yuvakart.mathrusriinfotech.in/api/users';
  public registerResponse: any;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])] 
    });

    this.registerForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    }, {validator: matchingPasswords('password', 'confirmPassword')});

  }

  public onLoginFormSubmit(values: Object): void {
    if (this.loginForm.valid) {
      this._auth.loginUser(values).subscribe(
        (success) => {
          // console.log(success);
          this.loginResponse = success;
          if (this.loginResponse.status === 'success') {
            localStorage.setItem('token', this.loginResponse.data.email);
            this.router.navigate(['/']);
          } else if (this.loginResponse.status === 'error') {
            this.snackBar.open(this.loginResponse.message, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
          }
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }
  // remove validators and reset form values
  public removeValidators()  {
    this.registerForm.get('email').clearValidators();
    this.registerForm.get('name').clearValidators();
    this.registerForm.get('password').clearValidators();
    this.registerForm.get('confirmPassword').clearValidators();
    this.registerForm.updateValueAndValidity();
    // console.log('registred and set flag to', this.regFlag);
    this.registerForm.markAsUntouched();
    this.registerForm.markAsPristine();
  }
  public onRegisterFormSubmit(values: Object): void {
    if (this.registerForm.valid) {
      this._auth.registerUser(values).subscribe(
        (success) => {
          this.loginResponse = success;
          if(this.loginResponse.status === 'success' ){
            this.snackBar.open(this.loginResponse.message, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
          } else if(this.loginResponse.status === 'ok') {
            this.snackBar.open(this.loginResponse.message, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            this.removeValidators();
            this.registerForm.reset();
          }
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

}
