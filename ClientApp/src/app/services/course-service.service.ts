import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CourseService {
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getCourses() {
    return this._http.get(this.myAppUrl + 'Course/')
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  getCourseById(id: number) {
    return this._http.get(this.myAppUrl + "Course/Details/" + id)
      .map((response: Response) => response)
      .catch(this.errorHandler)
  }
  
  saveCourse(course) {
    return this._http.post(this.myAppUrl + 'Course/Create', course)
      .map((response: Response) => response)
      .catch(this.errorHandler)
  }

  updateCourse(course) {
    return this._http.put(this.myAppUrl + 'Course/Edit', course)
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  deleteCourse(id) {
    return this._http.delete(this.myAppUrl + "Course/Delete/" + id)
      .map((response: Response) => response)
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
