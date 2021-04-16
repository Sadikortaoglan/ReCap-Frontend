import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  email=this.localStorageService.get('email')
  user:User=new User();
  check:boolean;
  constructor(private localStorageService:LocalStorageService,
               private authService:AuthService,
               private userService:UserService,
               private toastService:ToastrService,
               private route:Router){ }

  ngOnInit(): void {
    this.load();
  }
  
  load(){
    this.check = this.authService.isAuthenticated();
    this.checkToEmail();
    this.getEmail();
    this.checkAdmin();
  }
  checkToEmail(){
    if(this.localStorageService.get('email')){
      return true;
    }else{
      return false;
    }
  }
  logOut(){
    this.localStorageService.clean()
    this.toastService.success("Başarıyla çıkış yapıldı.");
    this.route.navigate(["/"])
  }
  getEmail(){
    if(this.email){
      this.userService.getByEmail(this.email).subscribe(response=>{
        this.user=response;
        this.authService.getClaims(this.user.id).subscribe(response=>{
          if(response.data.length>0){
            this.localStorageService.set('yetki','var')
            this.localStorageService.set('id',this.user.id.toString())
          }
        })
      })
    }
  }
checkAdmin(){
  if(this.localStorageService.get('yetki')){
    return true;
  }else{
    return false;
  }
}

}
