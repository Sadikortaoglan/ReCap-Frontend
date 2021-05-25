import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faLiraSign } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails: Car[];
  faLira = faLiraSign;
  apiUrl = environment.baseUrl;
  rentalDetail: Rental[];
  userFindeksForm: FormGroup;
  findeks: number;
  carFindeks: number;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute,
              private cartService: CartService, private rentalService: RentalService,
              private router: Router,
              private authService: AuthService,
              private toastrService: ToastrService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private localStorageService: LocalStorageService
              ) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.activatedRoute.params.subscribe(params => {
      if (params['carId']) {
        this.getCarDetail(params['carId']);
      }
    });
    this.createUserFindeksForm();
  }

  getCarDetail(carId: number){
    this.carService.getCarDetail(carId).subscribe(response => {
      this.carDetails = response.data;
      this.carFindeks = this.carDetails[0].findeksScore;
    });
  }

  addCart(car: Car){
    if (this.authService.isAuthenticated()){
     if(this.localStorageService.get('findeks')){
       if (this.carFindeks < parseInt(this.localStorageService.get('findeks')))
       {
         this.rentalService.getRentalByCarId(car.carId).subscribe(response => {
           this.rentalDetail = response.data;
         });
         this.cartService.addToCart(car);
         this.router.navigate(['/cart']);
       }else{
         this.toastrService.error('Arabayı Kiralayamazsınız Findeks Puanınız yetmiyor.');
       }
     }else{
       this.toastrService.info('Lütfen Findeks Puanınızı Hesaplayınız');
     }
    }else{
      this.toastrService.info('Lütfen Giriş Yapınız');
    }
  }

  createUserFindeksForm() {
    this.userFindeksForm = this.formBuilder.group({
      tc: ['', Validators.required],
      dateYear: ['', Validators.required],
    });
  }

  getUserFindeks() {
    if (this.userFindeksForm.valid) {
      if (parseInt(this.localStorageService.get('findeks')) > 0){
        this.toastrService.info('Findeks Puanınız: ' + this.localStorageService.get('findeks'));
      }else{
        const userFindeksModel = Object.assign({}, this.userFindeksForm.value);
        this.userService.fakeFindeks(userFindeksModel).subscribe(response => {
          this.findeks = response.data.userFindeks;
          this.localStorageService.set('findeks', this.findeks.toString());
          this.toastrService.info('Findeks Hesaplaması Başarılı. Findeks Puanınız: ' + this.findeks);
        });
      }
    }else{
      this.toastrService.info('Lütfen Findeks Hesaplaması Yapınız.');
    }
  }

}
