import { Component, OnInit } from '@angular/core';
import {  ConfirmationService, MessageService } from 'primeng/api';
import AddUserClaimModel from 'src/app/core/models/user/addUserClaimModel';

import ClaimModel from 'src/app/core/models/user/claimModel';
import UserClaimModel from 'src/app/core/models/user/userClaimModel';
import { UserModel } from 'src/app/core/models/user/userModel';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-claim-add',
  templateUrl: './user-claim-add.component.html',
  styleUrls: ['./user-claim-add.component.css'],providers: [MessageService, ConfirmationService]
})
export class UserClaimAddComponent implements OnInit {

  constructor(private userService: UserService,  private confirmationService: ConfirmationService,
  
    private messageService: MessageService) { }
    claims: ClaimModel[]
    users: UserModel[]
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
 

  save(userIdToAdd: number, claimIdToAdd: number) {

    var userClaimToAdd:AddUserClaimModel = {userId: userIdToAdd, operationClaimId: claimIdToAdd};
console.log("userID" + userClaimToAdd.userId);
console.log("ClaimID " + userClaimToAdd.operationClaimId);

    //this.confirmationService.confirm({
    //  message: 'Güncellemek istediğinize emin misiniz?',
     // accept: () => {

        this.userService.add(userClaimToAdd).subscribe(data => {

          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: '' });
          location.reload();
        });

      }
   // });

  //}

 
}