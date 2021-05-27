import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-image-delete',
  templateUrl: './car-image-delete.component.html',
  styleUrls: ['./car-image-delete.component.css']
})
export class CarImageDeleteComponent implements OnInit {
baseUrl=environment.baseUrl;
carImages:CarImage[]=[];
  constructor(private carImageService:CarImageService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
this.getImages();
  }
  getImages(){
    this.carImageService.getAll().subscribe(result=>{
      this.carImages=result.data;
    });
  }
  delete(imageId:number,carId:number){
    this.carImageService.deleteImage(new class implements CarImage{
      carId=carId;
      date:Date;
      id=imageId;
      ImagePath: string;
    }).subscribe(response=>{
      window.location.reload();
      this.toastrService.success("Başarıyla Silinmiştir.");
    })
  }
}
