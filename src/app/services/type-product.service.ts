import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TypeProduct } from '../models/typeProduct';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CheckApiRequest } from '../common/CheckApiRequest';

@Injectable({
  providedIn: 'root'
})
export class TypeProductService {
  baseUrl: any;
  modelName: any;
  constructor(private http : HttpClient) {
    this.baseUrl = environment.BaseUrl;
    this.modelName = "/api/TypeProduct/"
  }
  GetTypeProduct(id: string): any {
    return this.http.get<TypeProduct[]>(this.baseUrl + this.modelName+id)
    .pipe(catchError(CheckApiRequest.handleError));
  }
}
