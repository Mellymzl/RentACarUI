import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/core/services/brand.service';
import { brandModel } from 'src/app/models/brandModel';



@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {
  brands :brandModel[];
  selectedBrand: brandModel;
isLoading : boolean=true;

  constructor(private brandservice: BrandService) { }

  ngOnInit(): void {

  this.brandservice.getAll().subscribe(data=>{
    this.isLoading=true;
    this.brands=data; 

    this.isLoading=false;
    for (let index = 0; index < this.brands.length; index++) {
     

      this.brands[index].idAndName=  this.brands[index].id +" "+ this.brands[index].name;
      this.selectedBrand = this.brands[0]
    }
  })
  }

  }

