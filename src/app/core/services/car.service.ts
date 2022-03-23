import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import carAddModel from 'src/app/core/models/car/carAddModel';
import carDetailModel from 'src/app/core/models/car/carDetailModel';
import { carModel } from 'src/app/core/models/car/carModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = "http://localhost:5050/api/Cars/";

  constructor(private httpClient: HttpClient) { }



  getall(): Observable<carModel[]> {

    return this.httpClient.get<carModel[]>(this.apiUrl + "getall");
  }
  getById(id: number): Observable<carDetailModel> {

    return this.httpClient.get<carDetailModel>(this.apiUrl + "getbyid/" + id);
  }

  getbyBrandId(brandid: number): Observable<carModel[]> {

    return this.httpClient.get<carModel[]>(this.apiUrl + "getallbybrandid/" + brandid);
  }
  getbyColorId(colorid: number): Observable<carModel[]> {

    return this.httpClient.get<carModel[]>(this.apiUrl + "getallbycolorid/" + colorid);
  }
  add(car: carAddModel) {
    return this.httpClient.post(this.apiUrl + "add", car);
  }
}



