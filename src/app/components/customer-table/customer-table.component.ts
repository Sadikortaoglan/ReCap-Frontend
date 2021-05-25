import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
customers:Customer[]=[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  this.load();
  }
load(){
  this.getCustomer();

}
getCustomer(){
  this.customerService.getCustomers().subscribe(result=>{
    this.customers=result.data;
  })
}
}
