import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ClaimModel from '../models/user/claimModel';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  apiUrl: string = "http://localhost:5050/api/User/";
  constructor(private httpClient: HttpClient) { }


  getuserclaim():Observable<ClaimModel[]>{

    return this.httpClient.get<ClaimModel[]>(this.apiUrl+ "getall");
  }
  add(claim: ClaimModel) {
    return this.httpClient.post(this.apiUrl + "add", claim);

  }
}