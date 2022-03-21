import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorModel } from 'src/app/models/colorModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl: string = "http://localhost:5050/api/Colors/getall";
  constructor(private httpClient: HttpClient) { }


  getall():Observable<colorModel[]>{

    return this.httpClient.get<colorModel[]>(this.apiUrl);
  }
}
