import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import ClaimModel from 'src/app/core/models/user/claimModel';
import UserClaimModel from 'src/app/core/models/user/userClaimModel';
import { UserModel } from 'src/app/core/models/user/userModel';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-user-claim',
  templateUrl: './user-claim.component.html',
  styleUrls: ['./user-claim.component.css'],providers: [MessageService, ConfirmationService]
})
export class UserClaimComponent implements OnInit {
  constructor(private userService: UserService, 
    private confirmationService: ConfirmationService, 
    private messageService: MessageService) { }
  userclaims: UserClaimModel[];
  selecteduserclaim: UserClaimModel;
  brandId: number = 0;
  dialog: boolean;

  userclaim: UserClaimModel;
  claims: ClaimModel[]
  users: UserModel[]
  isNew: boolean;

  selectedClaim: ClaimModel;
  selectedUser: UserModel;


  ngOnInit(): void {
    this.userService.getall().subscribe(data => {
      this.users = data;
      this.selectedUser = this.users[0];

    })
    this.userService.getallclaim().subscribe(data => {
      this.claims = data;
      this.selectedClaim = this.claims[0];

    })

  }
  addUserClaim(userclaim_: UserClaimModel) {

    this.userclaim = { ...userclaim_ };
    //++//
    this.selectedClaim = this.claims[userclaim_.operationClaimId - 1];
    this.selectedUser = this.users[userclaim_.userId - 1];

    this.dialog = true;


  }
  hideDialog() {
    this.dialog = false;

  }

  save(userclaim: UserClaimModel) {

    this.confirmationService.confirm({
      message: 'Güncellemek istediğinize emin misiniz?',
      accept: () => {

        this.userService.add(this.userclaim).subscribe(data => {

          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: '' });
          location.reload();
        });

      }
    });

  }

 

  openNew() {
    this.isNew = true;

  }

}
