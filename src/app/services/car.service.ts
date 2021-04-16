import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl=environment.apiUrl
  currentCar:Car;

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/details";
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrand(branchId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/detailsbybrand?id="+branchId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/detailsbycolor?id="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/detailsbyid?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarByBrandAndColor(colorId:number,brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/carsbybrandandcolor?brandId="+brandId+"&colorId"+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  addToCar(car:Car):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/add";
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  updateCar(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/update",car);
  }
  deleteCar(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/delete",car);
  }
  getCurrentCar() {
    return this.currentCar;
  }
}
