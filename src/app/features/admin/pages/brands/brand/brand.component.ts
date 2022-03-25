import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/core/services/brand.service';
import { BrandModel } from 'src/app/core/models/brand/brandModel';



@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {
  brands :BrandModel[];
  selectedBrand: BrandModel;

  constructor(private brandservice: BrandService) { }

  ngOnInit(): void {

  this.brandservice.getAll().subscribe(data=>{

    this.brands=data;  
   this.selectedBrand = this.brands[0];


  })
  }       

  }

