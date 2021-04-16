import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl=environment.apiUrl;

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<ListResponseModel<CarImage>>{
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl+'carimages')
  }
  deleteeImage(carImage:CarImage):Observable<ResponseModel>{
    let newPath=this.apiUrl+"carimages/delete";
    return this.httpClient.post<ResponseModel>(newPath,carImage)
  }
  upload(carImageAdd:CarImage):Observable<ResponseModel>{
    let newPath=this.apiUrl+'carimages';
    return this.httpClient.post<ResponseModel>(newPath,carImageAdd)
  }
  updated(carImageUpdate:CarImage):Observable<ResponseModel>{
    let newPath=this.apiUrl+'carimages/update';
    return this.httpClient.post<ResponseModel>(newPath,carImageUpdate)
  }
}
