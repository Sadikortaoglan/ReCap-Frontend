import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-image-update',
  templateUrl: './car-image-update.component.html',
  styleUrls: ['./car-image-update.component.css']
})
export class CarImageUpdateComponent implements OnInit {
  cars:Car[]=[];
  details:Car[]=[];
  baseUrl = environment.baseUrl;
  constructor(private carService:CarService) { }

  ngOnInit(): void {
  }
  load(){

  }
  getCars(){
    this.carService.getCars().subscribe(result=>{
      this.cars=result.data;
    })

  }
  getByCarId(id:number){
    this.carService.getCarDetail(id).subscribe(result=>{
      this.details=result.data;
    })
  }

}
