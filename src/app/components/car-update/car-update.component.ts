import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm: FormGroup;
  brands: Brand[] = [];
  colors: Color[] = [];
  carId: number;
  cars:Car[];

  constructor(private formBuilder: FormBuilder,
              private carService: CarService,
              private toastrService: ToastrService,
              private brandService: BrandService,
              private colorService: ColorService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.carId = parseInt(params['id']);
      }
    });
    this.createCarUpdateForm();
    this.brandList();
    this.colorList();
    this.getCarIdList();
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      modelName:['',Validators.required]
    });
  }

  brandList() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    });
  }

  colorList() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    });
  }

  getCarIdList(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    })
  }

  updateCar() {
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
      this.carService.updateCar(carModel).subscribe(response => {
        this.toastrService.success(response.message, 'Ba??ar??l??');
      }, error => {
        if (error.error.Errors.length > 0) {
          for (let i = 0; i < error.error.Errors.length; i++) {
            this.toastrService.error(error.error.Errors[i].ErrorMessage, 'Do??rulama hatas??');
          }
        }
      });
    } else {
      this.toastrService.error('Form Bilgileriniz Eksik!', 'Hata');
    }
  }
}

