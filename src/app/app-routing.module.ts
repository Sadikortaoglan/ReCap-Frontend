import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [

  //Brand
  {path:"",component:BrandComponent},
  {path:"brand",component:BrandComponent},
  {path:"login",component:LoginComponent},
  {path:"color",component:ColorComponent},

  {path:"register",component:RegisterComponent},


  {path:"cars/add", component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:'cars/brand/:brandId/color/:colorId', component: CarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
