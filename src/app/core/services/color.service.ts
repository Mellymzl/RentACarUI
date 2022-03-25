import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorModel } from 'src/app/core/models/color/colorModel';
import ColorAddModel from '../models/color/colorAddModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl: string = "http://localhost:5050/api/Colors/";
  constructor(private httpClient: HttpClient) { }


  getall():Observable<ColorModel[]>{

    return this.httpClient.get<ColorModel[]>(this.apiUrl+ "getall");
  }
  add(color: ColorAddModel) {
    return this.httpClient.post(this.apiUrl + "add", color);

  }

}
