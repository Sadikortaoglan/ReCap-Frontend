import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
users:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.load();
  }
load(){
  this.getUsers();

}
getUsers(){
  this.userService.getUsers().subscribe(result=>{
    this.users=result.data;
  })

}
}
