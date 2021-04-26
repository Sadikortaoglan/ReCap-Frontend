import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-image-add',
  templateUrl: './car-image-add.component.html',
  styleUrls: ['./car-image-add.component.css']
})
export class CarImageAddComponent implements OnInit {
  imageAddForm:FormGroup;
  cars:Car[]=[];
  selectImage:File=null;
    constructor(private carService:CarService,
                private formBuilder:FormBuilder,
                private toasterService:ToastrService,
                private carImageService:CarImageService) { }
  
    ngOnInit(): void {
      this.load();
    }
  
  load(){
    this.getCarList();
    this.createImageAddForm();
  }
  
    createImageAddForm(){
      this.imageAddForm=this.formBuilder.group({
        CarId:["",Validators.required],
        file:[null],
      });
    }
      getCarList(){
        this.carService.getCars().subscribe(result=>{
          this.cars=result.data;
        })
      }
      uploadFile(event:any){
        const carImage=(event.target as HTMLInputElement).files[0];
        this.imageAddForm.patchValue({
          file:carImage
        });
      this.imageAddForm.get('file').updateValueAndValidity();
      }
    submitForm(){
        if (this.imageAddForm.valid) {
          var formData:any=new FormData();
          formData.append("file",this.imageAddForm.get("file").value);
          formData.append("CarId",this.imageAddForm.get("CarId").value);
          this.carImageService.upload(formData).subscribe(result=>{
            this.toasterService.success(result.message);
          },error=>{
            this.toasterService.error(error.error.message);
          })
        }else{
          this.toasterService.error("Form Bilgilerini Kontrol Ediniz.");
        }
      }
    }
  
  