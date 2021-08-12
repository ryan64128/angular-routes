import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesToUpperCase'
})
export class NamesToUpperCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let nameString: string[] = value.split(' ');
    if (nameString.length == 2){
      let first: string = nameString[0][0].toUpperCase() + nameString[0].substring(1);
      let last: string = nameString[1][0].toUpperCase() + nameString[1].substring(1);
      return first + " " + last;
    }
    return "";
  }

}
