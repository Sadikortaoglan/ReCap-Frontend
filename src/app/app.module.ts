import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import{ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarComponent } from './components/car/car.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { NaviComponent } from './components/navi/navi.component';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { FilterComponent } from './components/filter/filter.component';
import { ColorComponent } from './components/color/color.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { BrandTableComponent } from './components/brand-table/brand-table.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { CarImageDeleteComponent } from './components/car-image-delete/car-image-delete.component';
import { ColorTableComponent } from './components/color-table/color-table.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { CarImageAddComponent } from './components/car-image-add/car-image-add.component';
import { CarImageUpdateComponent } from './components/car-image-update/car-image-update.component';
import { RentalComponent } from './components/rental/rental.component';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FiterColorPipe } from './pipes/fiter-color.pipe';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { SidebarComponent } from './components/admin-panel/sidebar/sidebar.component';
import { NavbarComponent } from './components/admin-panel/navbar/navbar.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    CartComponent,
    FilterComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    BrandUpdateComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ColorDeleteComponent,
    BrandDeleteComponent,
    CarDeleteComponent,
    CarImageDeleteComponent,
    CarTableComponent,
    ColorTableComponent,
    BrandTableComponent,
    UserTableComponent,
    CustomerTableComponent,
    CarImageAddComponent,
    CarImageUpdateComponent,
    FilterCarPipe,
    FiterColorPipe,
    AdminPanelComponent,
    ColorComponent,
    SidebarComponent,
    NavbarComponent,
    CarUpdateComponent,
    PaymentComponent,
    ProfileComponent,
    FilterPipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,

    ToastrModule.forRoot({
      positionClass:"toastr-bottom-right"
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
