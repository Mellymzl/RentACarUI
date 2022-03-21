import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/car.service';
import { carModel } from 'src/app/models/carModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService : CarService) { }
  cars:carModel[];
  selectedCar:carModel;
  ngOnInit(): void {

    this.carService.getall().subscribe(data=>{

      this.cars= data;
    })
  }

}
