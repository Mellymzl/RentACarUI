import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brandModel } from 'src/app/core/models/brand/brandModel';
import { brandAddModel } from '../models/brand/brandAddModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl: string = "http://localhost:5050/api/Brands/";
  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<brandModel[]> {

    return this.httpClient.get<brandModel[]>(this.apiUrl + "getall");

  }

  add(brand: brandAddModel) {
    return this.httpClient.post(this.apiUrl + "add", brand);

  }

}
