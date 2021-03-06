import { Component, OnInit } from '@angular/core';
import { Data, AppService } from '../../../app.service';
import { AuthService } from '../../../auth.service';


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html'
})
export class TopMenuComponent implements OnInit {
  public currencies = ['USD', 'EUR'];
  public currency:any;
  public flags = [
    { name:'English', image: 'assets/images/flags/gb.svg' },
    { name:'German', image: 'assets/images/flags/de.svg' },
    { name:'French', image: 'assets/images/flags/fr.svg' },
    { name:'Russian', image: 'assets/images/flags/ru.svg' },
    { name:'Turkish', image: 'assets/images/flags/tr.svg' }
  ]
  public flag: any;
  public loginFlag;

  constructor(public appService: AppService, private authService: AuthService) { }

  ngOnInit() {
    this.currency = this.currencies[0];
    // this.flag = this.flags[0];
    // if (this.authService.loggedIn()) {
    //   this.loginFlag = true;
    // } else {
    //   this.loginFlag = false;
    // }
  }

  public changeCurrency(currency){
    this.currency = currency;
  }

  public changeLang(flag){
    this.flag = flag;
  }

}
