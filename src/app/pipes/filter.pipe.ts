import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Car[],filterText: string):Car[] {
    filterText=filterText?filterText.toLowerCase():"";
    return filterText?value.filter((x:Car)=>x.brandName.toLowerCase().indexOf(filterText)!==1):value
  }

}
