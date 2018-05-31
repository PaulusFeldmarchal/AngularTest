import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student-service.service'

@Component({
  selector: 'app-fetch-student-data',
  templateUrl: './fetch-student-data.component.html',
  providers: [StudentService]
})
export class FetchStudentDataComponent {
  public studentList: StudentData[] = [];

  constructor(private _router: Router, private _studentService: StudentService) {
    this.getStudents();
  }
  getStudents() {
    this._studentService.getStudents().subscribe(data => {
      this.studentList = data;
    });
  }
  delete(studentID) {
    var ans = confirm("Do you want to delete customer with Id: " + studentID);
    if (ans) {
      this._studentService.deleteStudent(studentID).subscribe((data) => {
        this.getStudents();
        alert(data);
      }, error => console.error(error))
    }
  }
}
export interface StudentData {
  id: number;
  name: string;
  groupId: number;
}
