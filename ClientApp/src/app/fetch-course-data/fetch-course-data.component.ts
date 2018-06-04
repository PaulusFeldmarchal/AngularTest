import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service'

@Component({
  selector: 'app-fetch-course-data',
  templateUrl: './fetch-course-data.component.html',
  providers: [CourseService]
})
export class FetchCourseDataComponent {
  public courseList: CourseData[] = [];

  constructor(private _router: Router, private _courseService: CourseService) {
    this.getCourse();
  }
  getCourse() {
    this._courseService.getCourses().subscribe(data => {
      this.courseList = data;
    });
  }
  delete(courseID) {
    var ans = confirm("Do you want to delete customer with Id: " + courseID);
    if (ans) {
      this._courseService.deleteCourse(courseID).subscribe((data) => {
        this.getCourse();
      }, error => console.error(error))
    }
  }
}
export interface CourseData {
  id: number;
  Specialization: string;
  groupId: number;
}
