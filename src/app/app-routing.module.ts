import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { BrandTableComponent } from './components/brand-table/brand-table.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageAddComponent } from './components/car-image-add/car-image-add.component';
import { CarImageDeleteComponent } from './components/car-image-delete/car-image-delete.component';
import { CarImageUpdateComponent } from './components/car-image-update/car-image-update.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { ColorTableComponent } from './components/color-table/color-table.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorComponent } from './components/color/color.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
//Auth
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},

//Color
{path:"color/add",component:ColorAddComponent,canActivate:[LoginGuard]},
{path:"color/update",component:ColorUpdateComponent,canActivate:[LoginGuard]},
{path:"color/delete",component:ColorDeleteComponent,canActivate:[LoginGuard]},
{path:"color",component:ColorTableComponent,canActivate:[LoginGuard]},


//Car
{path:"car",component:CarTableComponent,canActivate:[LoginGuard]},
{path:"car/add",component:CarAddComponent,canActivate:[LoginGuard]},
{path:"car/update",component:CarUpdateComponent,canActivate:[LoginGuard]},
{path:"car/delete",component:CarDeleteComponent,canActivate:[LoginGuard]},
{path:"car/imagedelete",component:CarImageDeleteComponent,canActivate:[LoginGuard]},
{path:"car/imageadd",component:CarImageAddComponent,canActivate:[LoginGuard]},
{path:"car/imageupdate",component:CarImageUpdateComponent,canActivate:[LoginGuard]},

  //Brand
  {path:"",component:BrandComponent},
  {path:"brand",component:BrandComponent},
  {path:"color",component:ColorComponent},

  {path:"register",component:RegisterComponent},

//Cars Routing
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"car/details/:carId", component: CarDetailComponent },
  {path:'cars/brand/:brandId/color/:colorId', component: CarComponent },

  //Brand
  {path:"brand/add",component:BrandAddComponent,canActivate:[LoginGuard]},
  {path:"brand/update",component:BrandUpdateComponent,canActivate:[LoginGuard]},
 {path:"brand/delete",component:BrandDeleteComponent,canActivate:[LoginGuard]},
  {path:"brand",component:BrandTableComponent,canActivate:[LoginGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
