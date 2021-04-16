import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../models/car';
import { CartItems } from '../models/carItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toastrService:ToastrService) { }

  addToCart(car:Car){
    CartItems.car =car;
  }
  removeFromCart(car:Car){
    CartItems.car=undefined;
    this.toastrService.error(car.brandName+ ' '+car.modelName,'Kaldırıldı.')
  }
  getCart(){
    return CartItems;
  }
}
