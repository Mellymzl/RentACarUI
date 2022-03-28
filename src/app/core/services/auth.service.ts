import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/auth/loginModel';
import { TokenModel } from '../models/auth/tokenModel';
import { UserModel } from '../models/user/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiUrl:string="http://localhost:5050/api/Auth/"
constructor(private httpClient: HttpClient) { }




login(loginModel:LoginModel){


  return this.httpClient.post<TokenModel>(this.apiUrl+"login",loginModel);
}


register(userModel:UserModel){
  return this.httpClient.post(this.apiUrl+"register",userModel);

}
isAuthenticated()
{


}

}
