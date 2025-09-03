import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {


  transform(values: any[], ...args: any[]): any[] {

    console.log(values)

    console.log(args[0], args[1])
    if(!values){
      return []
    }
   if(!args[1] || !values){
          return values;
   }

  let  response = values.filter(element => element[args[0]]===args[1].toLocaleLowerCase());

  console.log(response)
      // return values.includes)

      return response;
  }

}


