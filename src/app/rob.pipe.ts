import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rob',
  standalone: true
})
export class RobPipe implements PipeTransform {

  transform(value: string, ...args:string[]): string {
    return value.substring(0,Number.parseInt(args[0])).toLocaleUpperCase();
  }

}
