import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BaseService {
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  protected getElements(method: string) {
    return this._http.get(this.myAppUrl + method)
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  protected getElemById(method: string, id: number) {
    return this._http.get(this.myAppUrl + method + id)
      .map((response: Response) => response)
      .catch(this.errorHandler)
  }

  protected save(method: string, obj) {
    return this._http.post(this.myAppUrl + method, obj)
      .map((response: Response) => response)
      .catch(this.errorHandler)
  }

  protected update(method: string, course) {
    return this._http.put(this.myAppUrl + method, course)
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  protected delete(method: string, id: number) {
    return this._http.delete(this.myAppUrl + method + id)
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  protected customGetQuery(method: string, id: number) {
    return this._http.get(this.myAppUrl + method + id)
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
