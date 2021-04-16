import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { Filters } from 'src/app/models/filters';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded = false;
  error = '';
  currentColor: Color;
  allColor?: Color;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.load();
  }
  load(){
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(result=>{
      this.colors=result.data;
      this.dataLoaded=true;

    },error=>{
      this.error=error.name;
    })
  }
  setCurrentColor(){
    this.currentColor!==undefined
    ?(Filters.colorId=this.currentColor.colorId.toString())
    :(Filters.colorId='');
  }
  allColorsSelected(){
    return this.currentColor==undefined?true:false;
  }

}
