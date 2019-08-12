import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCat'
})
export class MyCatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "test data";
  }

}
