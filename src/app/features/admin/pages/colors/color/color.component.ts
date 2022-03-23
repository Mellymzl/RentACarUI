import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/core/services/color.service';
import { colorModel } from 'src/app/core/models/color/colorModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:colorModel [];
  selectedColor:colorModel;
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {

    this.colorService.getall().subscribe(data=>{this.colors=data;})
   
  }

}
