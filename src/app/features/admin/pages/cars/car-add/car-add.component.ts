import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/app/core/services/brand.service';
import { CarService } from 'src/app/core/services/car.service';
import { ColorService } from 'src/app/core/services/color.service';
import { ColorModel } from 'src/app/core/models/color/colorModel';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrandModel } from 'src/app/core/models/brand/brandModel';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm: FormGroup;
  brands: BrandModel[]
  colors: ColorModel[]
  constructor(private formBuilder: FormBuilder, private carService: CarService, private brandService: BrandService, private colorService: ColorService,
    private confirmationService: ConfirmationService, private messageService: MessageService) { }

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
    this.confirmationService.confirm({
      message: 'Emin misiniz?',
      accept: () => {
        if (this.carAddForm.valid) {

          this.carService.add(this.carAddForm.value).subscribe(data => {

            this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Araba eklendi' });

            location.reload()
          });

        }

        else

          this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'Bir hata oluştu' });
      }

    });


  }

}
