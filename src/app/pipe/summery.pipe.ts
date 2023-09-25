import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summery'
})
export class SummeryPipe implements PipeTransform {

  transform(value:string, limit?:number, url?:string) {
    if(!value)
      return null
    let final_limit = limit ? limit : 50
    return value.substring(0,final_limit) +"<a href="+ url +">"+ url+  " </a> [more ..]"
  }

}
