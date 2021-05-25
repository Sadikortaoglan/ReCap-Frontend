import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'fiterColor'
})
export class FiterColorPipe implements PipeTransform {

  
  transform(value: Color[], filterColorText: string): Color[] {
    filterColorText=filterColorText?filterColorText.toLocaleLowerCase():""

    return filterColorText?value.filter((c:Color)=>c.colorName.toLocaleLowerCase().indexOf(filterColorText)!==-1):value;
  }

}