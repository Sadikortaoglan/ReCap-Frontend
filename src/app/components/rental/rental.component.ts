import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
dataLoaded=false;
rentals:Rental[]=[];
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.getRentals();
  }
  getRentals(){
    this.rentalService.getRentals().subscribe(result=>{
      this.rentals=result.data;
      this.dataLoaded=true;
    })
  }

}
