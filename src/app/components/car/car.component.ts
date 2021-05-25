import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  apiUrl=environment.baseUrl;
  dataLoaded=false;
  filterText="";
  filterColorText="";

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.activatedRoute.params.subscribe(params=>{
      if(params['brandId']&& params['colorId'])
      this.getCarByBrandAndColor(params['brandId'],params['colorId']);
      else if(params['brandId']) this.getCarsByBrand(params['brandId']);
      else if(params['colorId']) this.getCarsByBrand(params['colorId']);
    })
  }

  getCarByBrandAndColor(brandId:number,colorId:number){
    this.carService.getCarByBrandAndColor(brandId,colorId).subscribe(result=>{
      this.cars=result.data;
      this.dataLoaded=true;
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(result=>{
      this.cars=result.data;
      this.dataLoaded=true;
    });
  }
  getCars(){
    this.carService.getCars().subscribe(result=>{
      this.cars=result.data;
      this.dataLoaded=true;
    })
  }
  changeFilterTextSize(filterText:string){
    this.filterText=filterText.toLocaleUpperCase();
  }
  getCarByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(result=>{
      this.cars=result.data;
      this.dataLoaded=true;
    })
  }

}
