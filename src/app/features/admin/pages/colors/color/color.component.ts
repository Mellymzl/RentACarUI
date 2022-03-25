import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/core/services/color.service';
import { ColorModel } from 'src/app/core/models/color/colorModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:ColorModel [];
  selectedColor:ColorModel ={id: 1};
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {

    this.colorService.getall().subscribe(data=>{
      this.colors=data;
      this.selectedColor = this.colors[0]
    })
   
  }

}
