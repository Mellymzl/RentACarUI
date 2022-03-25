import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/core/services/car.service';
import CarDetailModel from 'src/app/core/models/car/carDetailModel';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(private  activatedRoute: ActivatedRoute, private carService: CarService) { }
  car:CarDetailModel;
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{

      this.carService.getById(params["id"]).subscribe(data=> this.car=data)
    })
  }


}
