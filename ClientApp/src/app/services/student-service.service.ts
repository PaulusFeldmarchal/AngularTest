import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class StudentService {
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getStudents() {
    return this._http.get(this.myAppUrl + 'Student/')
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  getStudentById(id: number) {
    return this._http.get(this.myAppUrl + "Student/Details/" + id)
      .map((response: Response) => response)
      .catch(this.errorHandler)
  }
  
  saveStudent(student) {
    return this._http.post(this.myAppUrl + 'Student/Create', student)
      .map((response: Response) => response)
      .catch(this.errorHandler)
  }

  updateStudent(student) {
    return this._http.put(this.myAppUrl + 'Student/Edit', student)
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  deleteStudent(id) {
    return this._http.delete(this.myAppUrl + "Student/Delete/" + id)
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
