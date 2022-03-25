import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BrandAddModel } from '../models/brand/brandAddModel';
import { BrandModel } from '../models/brand/brandModel';






@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl: string = "http://localhost:5050/api/Brands/";
  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<BrandModel[]> {

    return this.httpClient.get<BrandModel[]>(this.apiUrl + "getall");

  }

  add(brand: BrandAddModel) {
    return this.httpClient.post(this.apiUrl + "add", brand);

  }

}
