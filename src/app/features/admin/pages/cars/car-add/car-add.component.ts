import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/app/core/services/brand.service';
import { CarService } from 'src/app/core/services/car.service';
import { ColorService } from 'src/app/core/services/color.service';
import { brandModel } from 'src/app/core/models/brand/brandModel';
import { colorModel } from 'src/app/core/models/color/colorModel';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm: FormGroup;
  brands: brandModel[]
  colors: colorModel[]
  constructor(private formBuilder: FormBuilder, private carService: CarService, private brandService: BrandService, private colorService: ColorService) { }

  ngOnInit(): void {
    this.brandService.getAll().subscribe(data => {
      this.brands = data;
    })
    this.colorService.getall().subscribe(data => {
      this.colors = data;
    })


    this.createCarAddForm();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: [0, Validators.required],
      colorId: [0, Validators.required],
      name: ["", Validators.required],
      description: ["", Validators.required],
      dailyPrice: [0, Validators.required]

    })
  }

  add() {

    if (this.carAddForm.valid) {
      console.log("basarılı")
      this.carService.add(this.carAddForm.value).subscribe(data => {

        alert("kayıt başarılı");
      });

    }

    else { }
  }

}
