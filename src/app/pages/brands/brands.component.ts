import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  
  public letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","Y","Z"];
  public brands = [];
  public searchText: string;
  imagePath = environment.imgBasePath;

  constructor(public appService:AppService) { }

  ngOnInit() {
    // this.brands = this.appService.getBrands();
    // this.brands.sort((a, b)=>{
    //   if(a.name < b.name) return -1;
    //   if(a.name > b.name) return 1;
    //   return 0;
    // });
    this.appService.getBrands().subscribe(
      result => this.brands = result,
      error => console.log(error)
    );
    console.log('From Brands...' + this.brands);
  }
}
