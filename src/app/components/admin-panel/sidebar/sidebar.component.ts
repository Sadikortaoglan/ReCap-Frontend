import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService,
              private router:Router,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  lobby(){
    this.localStorageService.clean();
    this.toastrService.info("Çıkış Yapıldı.")
    this.router.navigate(['']);
  }

}
