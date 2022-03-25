import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/core/services/car.service';
import { CarModel } from 'src/app/core/models/car/carModel';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import CarAddModel from 'src/app/core/models/car/carAddModel';
import CarUpdateModel from 'src/app/core/models/car/carUpdateModel';
import { BrandService } from 'src/app/core/services/brand.service';
import { ColorService } from 'src/app/core/services/color.service';
import { BrandModel } from 'src/app/core/models/brand/brandModel';
import { ColorModel } from 'src/app/core/models/color/colorModel';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'], providers: [MessageService, ConfirmationService]
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService, private colorService: ColorService, private brandService: BrandService,
    private activatedRoute: ActivatedRoute, private confirmationService: ConfirmationService, private messageService: MessageService) { }
  cars: CarModel[];
  selectedCar: CarModel;
  brandId: number = 0;
  carDialog: boolean;

  car: CarUpdateModel;
  brands: BrandModel[]
  colors: ColorModel[]
  isNewCar: boolean;

  selectedBrand: BrandModel;
  selectedColor: ColorModel;


  ngOnInit(): void {
    this.brandService.getAll().subscribe(data => {
      this.brands = data;
      this.selectedBrand = this.brands[0];

    })
    this.colorService.getall().subscribe(data => {
      this.colors = data;
      this.selectedColor = this.colors[0];

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
  editCar(carx: CarUpdateModel) {

    this.car = { ...carx };
    //++//
    this.selectedBrand = this.brands[carx.brandId - 1];
    this.selectedColor = this.colors[carx.colorId - 1];

    this.carDialog = true;


  }
  hideDialog() {
    this.carDialog = false;

  }

  saveCar(car: CarUpdateModel) {

    this.confirmationService.confirm({
      message: 'Güncellemek istediğinize emin misiniz?',
      accept: () => {

        this.carService.update(this.car).subscribe(data => {

          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Renk güncellendi' });
          location.reload();
        });

      }
    });

  }

  deleteCar(car: CarModel) {
    this.confirmationService.confirm({
      message: 'Silemek istediğinize emin misiniz?',
      accept: () => {

        this.carService.delete(car).subscribe(data => {

          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Renk silindi' });
          location.reload();
        });

      }
    });



  }

  openNew() {
    this.isNewCar = true;

  }

}


