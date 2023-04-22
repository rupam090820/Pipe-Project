import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // Value --> pipe value     filterstring: pipe parameter
    // value --> foodList       filterstring ---> searchedFood 
  transform(value: any, filterstring:string ): any {
    if (filterstring.length >= 3) {
    let searchdata=value.filter((item:any)=>{
      return (item.food.toLowerCase().includes(filterstring.toLocaleLowerCase()));
    });
   return searchdata;
} else {
  return value;
}
// bellow code are another proccess ( it is done by ux trendz youtube video)
// if(value.length === 0){
//   return value;
// }
// return value.filter(function(search:any){
// return search.food.toLowerCase().indexOf(filterstring.toLowerCase())>-1
// });
 }
}
