import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-delete',
  templateUrl: './color-delete.component.html',
  styleUrls: ['./color-delete.component.css']
})
export class ColorDeleteComponent implements OnInit {
  colorDeleteForm:FormGroup;
  colors: Color[];

  constructor(private formBuilder: FormBuilder,
              private colorService: ColorService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.createColorDeleteForm();
    this.getColors();
  }

  deleteColor(){
    if(this.colorDeleteForm.valid){
      let colorModel = Object.assign({},this.colorDeleteForm.value)
      this.colorService.deleteToColor(colorModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!")
      },responseError => {
        if(responseError.error.ValidationErrors.length>0){
          for(let i=0;i<responseError.error.ValidationErrors.length;i++){
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
      });
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat!")
    }
  }


  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }

  createColorDeleteForm() {
    this.colorDeleteForm = this.formBuilder.group({
      colorId: ["",Validators.required]
    });
  }
}
