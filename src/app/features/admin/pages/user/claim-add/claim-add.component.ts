import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-claim-add',
  templateUrl: './claim-add.component.html',
  styleUrls: ['./claim-add.component.css'], providers: [MessageService, ConfirmationService]
})
export class ClaimAddComponent implements OnInit {

  constructor(private userService: UserService, private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService, private messageService: MessageService) { }
  claimAddForm: FormGroup;
  ngOnInit(): void {
    this.createClaimAddForm();
  }

  createClaimAddForm() {

    this.claimAddForm = this.formBuilder.group({

      name: ["", Validators.required]
    });

  }


  add() {

    if (this.claimAddForm.valid) {

      this.userService.addClaim(this.claimAddForm.value).subscribe(data => {

        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Yetki eklendi' });
        location.reload();
      }
        , responseError => {
          var error = "Errors";
          var detail = "Detail";
          if (error in responseError.error) {
            for (
              let i = 0;i < responseError.error.Errors.length;i++ ) {

              this.messageService.add({ severity: 'error', summary: 'Hata', detail: responseError.error.Errors[i].ErrorMessage });

            }
          }
          if (detail in responseError.error) {
            this.messageService.add({ severity: 'error', summary: 'Hata', detail: responseError.error.Detail, });


          }
        
         
      });

  }
}
}
