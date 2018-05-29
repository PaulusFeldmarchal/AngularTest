import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GroupService {
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getGroups() {
    return this._http.get(this.myAppUrl + 'Group/')
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  getGroupById(id: number) {
    return this._http.get(this.myAppUrl + "Group/Details/" + id)
      .map((response: Response) => response)
      .catch(this.errorHandler)
  }
  
  saveGroup(group) {
    return this._http.post(this.myAppUrl + 'Group/Create', group)
      .map((response: Response) => response)
      .catch(this.errorHandler)
  }

  updateGroup(group) {
    return this._http.put(this.myAppUrl + 'Group/Edit', group)
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  deleteGroup(id) {
    return this._http.delete(this.myAppUrl + "Group/Delete/" + id)
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
