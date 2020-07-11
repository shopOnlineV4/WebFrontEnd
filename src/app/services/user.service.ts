import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { CheckApiRequest } from '../common/CheckApiRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: any;
  modelName: any;
  constructor(private http : HttpClient) {
    this.baseUrl = environment.BaseUrl;
    this.modelName = "/api/user/"
  }

  userLogin(userLogin : UserLogin): Observable<any> {
    return this.http.post<any>(this.baseUrl+this.modelName+"login",userLogin).pipe(catchError(CheckApiRequest.handleError));
  }



}
