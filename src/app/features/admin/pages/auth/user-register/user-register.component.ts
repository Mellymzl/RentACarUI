import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'], providers: [MessageService, ConfirmationService]
})
export class UserRegisterComponent implements OnInit {
  userForm: FormGroup;

 
  constructor(private authService: AuthService ,private formBuilder: FormBuilder,private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.createUserForm();
  }
  createUserForm() {
    this.userForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
   });
  }
   register (){

    if (this.userForm.valid) {

      this.authService.register(this.userForm.value).subscribe(data => { 

     
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı eklendi.' });

      });

    }
  }

}
