import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../services/group-service.service'

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css'],
  providers: [GroupService]
})
export class groupDetail {
  public courseList: CourseData[] = [];
  public studentList: StudentData[] = [];
  public group: GroupData = new GroupData();
  id: number;

  constructor(private _router: Router, private _groupService: GroupService, private _avRoute: ActivatedRoute) {
    this.id = this._avRoute.snapshot.params["id"];
    this.getData();
  }
  getData() {
    this._groupService.getGroupById(this.id).subscribe(data => {
      this.group = data;
    });
    this._groupService.getAllCourses(this.id).subscribe(data => {
      this.courseList = data;
    });
    this._groupService.getAllStudents(this.id).subscribe(data => {
      this.studentList = data;
    });
  }
}
export interface CourseData {
  id: number;
  Specialization: string;
  groupId: number;
}
export interface StudentData {
  id: number;
  name: string;
  groupId: number;
}
export class GroupData {
  id: number = 0;
  name: string = '';
}
