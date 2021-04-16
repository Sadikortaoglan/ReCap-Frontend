import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { observable } from 'rxjs';



@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm: FormGroup;
  currentCar: Car;
  brands:Brand[]=[]
  colors:Color[]=[]
  @Input() carForUpdate:CarDetail
  constructor(private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private brandService:BrandService,
    private colorService:ColorService,
    private authService:AuthService) {}

  ngOnInit(): void {
  }
updateCar(){
  
  let carModel:Car=Object.assign({},this.carUpdateForm.value);
  carModel.carId=this.carForUpdate.carId
  this.carService.updateCar(carModel).subscribe(result=>{
    this.toastrService.success(result.message);
  },resultError=>{
    this.toastrService.error(resultError.error.message);
  });
}
createCarUpdateForm(){
  this.carUpdateForm=this.formBuilder.group({
    brandId:[this.carForUpdate?this.carForUpdate.brandId:"",Validators.required],
    colorId:[this.carForUpdate?this.carForUpdate.colorId:"",Validators.required],
    modelYear:[this.carForUpdate?this.carForUpdate.modelYear:"",Validators.required],
    dailyPrice:[this.carForUpdate?this.carForUpdate.dailyPrice:"",Validators.required],
    desciption:[this.carForUpdate?this.carForUpdate.description:"",Validators.required],
    minFibdeksScore:[this.carForUpdate?this.carForUpdate.minFindeksScore:"",Validators.required]
  });
}
Update(){
  let carModel:Car=Object.assign({},this.carUpdateForm.value);
  carModel.carId=this.carForUpdate.carId;
  this.carService.updateCar(carModel).subscribe(result=>{
    this.toastrService.success(result.message);
  },resultError=>{
    this.toastrService.error(resultError.error.message);
  });
}
getCurrentCar(){
  return this.carService.getCurrentCar();
}
getBrands(){
  this.brandService.getBrands().subscribe(result=>{
    this.brands=result.data;
  })
}
  getColors(){
    this.colorService.getColors().subscribe(result=>{
      this.colors=result.data;
    })
  }
  checkToLogin(){
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      return false;
    }
  }
  
}

  
