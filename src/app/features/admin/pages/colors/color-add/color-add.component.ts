import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColorService } from 'src/app/core/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm: FormGroup;
  constructor(private colorService: ColorService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.createBrandAddForm();
  }
  createBrandAddForm() {
    this.colorAddForm = this.formBuilder.group({ 
      name: ["", Validators.required],      
    })
  }

  add() {

    if (this.colorAddForm.valid) {

      this.colorService.add(this.colorAddForm.value).subscribe(data => {

        alert("Kayıt başarılı");
      });

    }

    else {alert("Bir hata oluştu"); }
  }
}


