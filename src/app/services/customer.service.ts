import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl=environment.apiUrl;
 
  constructor(private httpClient:HttpClient) { }
getCustomers():Observable<ListResponseModel<Customer>>{
  return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl+'customer')

}
getTotalCustomers():Observable<ListResponseModel<ResponseModel>>{
  return this.httpClient.get<ListResponseModel<ResponseModel>>(this.apiUrl+'customers/totalcustomers');
}

}
