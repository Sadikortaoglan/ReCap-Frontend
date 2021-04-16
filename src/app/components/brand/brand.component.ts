import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Filters } from 'src/app/models/filters';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  dataloaded=false;
  error="";
  currentBrand?: Brand;
  allBrand?: Brand

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.load()
  }
  load(){
    this.getBrands();
  }
  getBrands(){
    this.brandService.getBrands().subscribe(result =>{
      this.brands=result.data;
      this.dataloaded=true;
    });
  }
  
  setCurrentBrand(){
    this.currentBrand!==undefined
    ? (Filters.brandId=this.currentBrand.toString())
    :(Filters.brandId='');
  }
  allBrandSelected(){
    return this.currentBrand===undefined ? true : false;
  }
}
