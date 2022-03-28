import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UserClaimModel from '../models/user/userClaimModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "http://localhost:5050/api/User/";
  constructor(private httpClient: HttpClient) { }


  getuserclaim():Observable<UserClaimModel[]>{

    return this.httpClient.get<UserClaimModel[]>(this.apiUrl+ "getuserclaim");
  }
  add(userclaim: UserClaimModel) {
    return this.httpClient.post(this.apiUrl + "setuserclaim", userclaim);

  }
}
