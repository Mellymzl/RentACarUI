import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CarAddModel from 'src/app/core/models/car/carAddModel';
import CarDetailModel from 'src/app/core/models/car/carDetailModel';
import { CarModel } from 'src/app/core/models/car/carModel';
import CarUpdateModel from '../models/car/carUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = "http://localhost:5050/api/Cars/";

  constructor(private httpClient: HttpClient) { }



  getall(): Observable<CarModel[]> {

    return this.httpClient.get<CarModel[]>(this.apiUrl + "getall");
  }
  getById(id: number): Observable<CarDetailModel> {

    return this.httpClient.get<CarDetailModel>(this.apiUrl + "getbyid/" + id);
  }

  getbyBrandId(brandid: number): Observable<CarModel[]> {

    return this.httpClient.get<CarModel[]>(this.apiUrl + "getallbybrandid/" + brandid);
  }
  getbyColorId(colorid: number): Observable<CarModel[]> {

    return this.httpClient.get<CarModel[]>(this.apiUrl + "getallbycolorid/" + colorid);
  }
  add(car: CarAddModel) {
    return this.httpClient.post(this.apiUrl + "add", car);
  }

  update(car: CarUpdateModel) {
    return this.httpClient.post(this.apiUrl + "update", car);
  }

  delete(car: CarModel) {
    return this.httpClient.post(this.apiUrl + "delete", car);
  }
}



