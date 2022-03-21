import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carModel } from 'src/app/models/carModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = "http://localhost:5050/api/Cars/getall";

  constructor(private httpClient: HttpClient) { }



  getall(): Observable<carModel[]> {

    return this.httpClient.get<carModel[]>(this.apiUrl);
  }
}



