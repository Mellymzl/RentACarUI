import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], providers: [MessageService, ConfirmationService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

 
  constructor(private authService: AuthService ,private formBuilder: FormBuilder,private confirmationService: ConfirmationService, private messageService: MessageService)  { }
  ngOnInit(): void {
    
  
    this.createLoginForm()

  } 
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
 
   });

  }
    login (){

      if (this.loginForm.valid) {

        this.authService.login(this.loginForm.value).subscribe(data => { 

         
          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Giriş Yaptınız' });
          console.log(data.token);
         }
          
          , responseError => {
        
            this.messageService.add({ severity: 'error', summary: 'Hata', detail: responseError.error.Detail });
    
        });

      }
    }
  }


