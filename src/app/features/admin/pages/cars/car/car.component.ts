import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/core/services/car.service';
import { carModel } from 'src/app/core/models/car/carModel';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import carAddModel from 'src/app/core/models/car/carAddModel';
import carUpdateModel from 'src/app/core/models/car/CarUpdateModel';
import { BrandService } from 'src/app/core/services/brand.service';
import { ColorService } from 'src/app/core/services/color.service';
import { brandModel } from 'src/app/core/models/brand/brandModel';
import { ColorModel } from 'src/app/core/models/color/colorModel';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],providers:[MessageService,ConfirmationService]
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService,private colorService: ColorService, private brandService: BrandService,
    private activatedRoute: ActivatedRoute) { }
  cars: carModel[];
  selectedCar: carModel;
  brandId: number = 0;
  carDialog: boolean;

  car: carUpdateModel;
  brands: brandModel[]
  colors: ColorModel[]

  ngOnInit(): void {
    this.brandService.getAll().subscribe(data => {
      this.brands = data;
    })
    this.colorService.getall().subscribe(data => {
      this.colors = data;
    })
    this.activatedRoute.params.subscribe(params => {
      if (params["brandid"]) {
        this.carService.getbyBrandId(params["brandid"]).subscribe(data => this.cars = data)
      }
      else if (params["colorid"]) {
        this.carService.getbyColorId(params["colorid"]).subscribe(data => this.cars = data)
      } else {
        this.carService.getall().subscribe(data => {

          this.cars = data;
        })
      }
    })



  }
  editCar(car: carUpdateModel) {
    this.car = {...car};
    this.carDialog = true;
}
hideDialog() {
  this.carDialog = false;

}

saveCar(car : carUpdateModel) {

 
    this.carService.add(this.car).subscribe(data => {

      alert("kayıt başarılı");
      location.reload();
    })
  
}

  
  
}


