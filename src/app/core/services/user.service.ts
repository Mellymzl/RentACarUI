import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AddUserClaimModel from '../models/user/addUserClaimModel';
import ClaimModel from '../models/user/claimModel';
import UserClaimModel from '../models/user/userClaimModel';
import { UserModel } from '../models/user/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "http://localhost:5050/api/User/";
  apiClaimUrl: string = "http://localhost:5050/api/Claim/";
  constructor(private httpClient: HttpClient) { }


  getuserclaim():Observable<UserClaimModel[]>{

    return this.httpClient.get<UserClaimModel[]>(this.apiUrl+ "getuserclaim");
  }
  getall():Observable<UserModel[]>{

    return this.httpClient.get<UserModel[]>(this.apiUrl+ "getall");
  }
  add(userclaim: AddUserClaimModel) {
    return this.httpClient.post(this.apiUrl + "setuserclaim", userclaim);

  }
  addClaim(claim: ClaimModel) {
    return this.httpClient.post(this.apiClaimUrl + "add", claim);

  }
  getallclaim():Observable<ClaimModel[]>{

    return this.httpClient.get<ClaimModel[]>(this.apiClaimUrl+ "getall");
  }
}
