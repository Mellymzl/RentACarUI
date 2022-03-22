import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import carDetailModel from 'src/app/models/carDetailModel';
import { carModel } from 'src/app/models/carModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = "http://localhost:5050/api/Cars/";

  constructor(private httpClient: HttpClient) { }



  getall(): Observable<carModel[]> {

    return this.httpClient.get<carModel[]>(this.apiUrl+"getall");
  }
  getById(id:number): Observable<carDetailModel> {

    return this.httpClient.get<carDetailModel>(this.apiUrl+"getbyid/"+id);
  }

  getbyBrandID(brandid:number): Observable<carModel[]> {

    return this.httpClient.get<carModel[]>(this.apiUrl+"getallbybrand/"+brandid);
  }
}



