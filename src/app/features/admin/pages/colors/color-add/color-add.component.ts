import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import {MessageService} from 'primeng/api';
import { ColorService } from 'src/app/core/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css'],
  providers:[ConfirmationService,MessageService]
})
export class ColorAddComponent implements OnInit {

  colorAddForm: FormGroup;
  constructor(private colorService: ColorService,private formBuilder: FormBuilder, private confirmationService :ConfirmationService, private messageService:MessageService ) { }

  ngOnInit(): void {

    this.createBrandAddForm();
  }
  createBrandAddForm() {
    this.colorAddForm = this.formBuilder.group({ 
      name: ["", Validators.required],      
    })
  }

  add() {


    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        if (this.colorAddForm.valid) {

          this.colorService.add(this.colorAddForm.value).subscribe(data => {
    
            this.messageService.add({severity:'success', summary:'Başarılı', detail:'Renk eklendi'});
          });
    
        }
    
        else 

        this.messageService.add({severity:'error', summary:'Hata', detail:'Bir hata oluştu'});
      }
      
  });

}
}


