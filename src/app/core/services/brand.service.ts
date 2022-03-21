import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brandModel } from 'src/app/models/brandModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl: string = "http://localhost:5050/api/Brands/getall";
  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<brandModel[]> {

    return this.httpClient.get<brandModel[]>(this.apiUrl);

  }
}
