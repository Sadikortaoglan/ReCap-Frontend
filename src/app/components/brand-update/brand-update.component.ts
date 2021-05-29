import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brand:Brand[]=[];
  brandUpdateForm:FormGroup;
  brandId:number;

  constructor(private brandService:BrandService,
              private formBuilder:FormBuilder,  
              private toastrService:ToastrService,
              private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.updateBrand();

  }
  updateBrand()
  {
    if(this.brandUpdateForm.valid){
      let brandModel=Object.assign({},this.brandUpdateForm.value);
      this.brandService.updateBrand(brandModel).subscribe(result=>{
        this.toastrService.success(result.message,"Başarılı");
      },error=>{
        if (error.error.Errors.length>0){
          for(let i=0;i<error.error.Errrors.length;i++)
          {
            this.toastrService.error(error.error.Errors[i].ErrorMessage,"Doğrulama Hatası");
          }
        }
      });
    }else
    {
      this.toastrService.error("Form Bilgilerinizi Tamamını Doldurunuz!","Hata");
    }
  }
  getBrands(){
    this.brandService.getBrands().subscribe(result=>{
      this.brand=result.data;
    });
  }
  createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({
      brandId:["",Validators.required],
      brandName:["",Validators.required],
    });
  }
  
}
