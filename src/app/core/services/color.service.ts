import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorModel } from 'src/app/core/models/color/colorModel';
import colorAddModel from '../models/color/colorAddModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl: string = "http://localhost:5050/api/Colors/";
  constructor(private httpClient: HttpClient) { }


  getall():Observable<colorModel[]>{

    return this.httpClient.get<colorModel[]>(this.apiUrl+ "getall");
  }
  add(color: colorAddModel) {
    return this.httpClient.post(this.apiUrl + "add", color);

  }

}
