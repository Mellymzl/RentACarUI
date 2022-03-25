import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/core/services/brand.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brandAddForm: FormGroup;
  constructor(private brandService: BrandService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.createBrandAddForm();
  }
  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({ 
      name: ["", Validators.required],      
    })
  }

  add() {

    if (this.brandAddForm.valid) {

      this.brandService.add(this.brandAddForm.value).subscribe(data => {

        alert("Kayıt başarılı");
        location.reload();
      });

    }

    else {alert("Bir hata oluştu"); }
  }
}
