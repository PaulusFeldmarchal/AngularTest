import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course-service.service';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../services/group-service.service'

@Component({
  selector: 'createcourse',
  templateUrl: './add-course-data.component.html'
})
export class createCourse implements OnInit {
  public groupList: GroupData[] = [];
  courseForm: FormGroup;
  title: string = "Create";
  id: number;
  errorMessage: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _courseService: CourseService, private _router: Router, private _groupService: GroupService) {
    this.getGroups();
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.courseForm = this._fb.group({
      id: 0,
      specialization: ['', [Validators.required]],
      groupId: 0
    })
  }

  getGroups() {
    this._groupService.getGroups().subscribe(data => {
      this.groupList = data;
    });
  }

  ngOnInit() {
    if (this.id > 0) {
      this.title = "Edit";
      this._courseService.getCourseById(this.id)
        .subscribe(resp => this.courseForm.setValue(resp)
          , error => this.errorMessage = error);
    }
  }

  save() {
    if (!this.courseForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this._courseService.saveCourse(this.courseForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-course-data']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._courseService.updateCourse(this.courseForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-course-data']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-course-data']);
  }

  get name() { return this.courseForm.get('specialization');
  }

  get groupId() { return this.courseForm.get('groupId') }
}
export interface GroupData {
  id: number;
  name: string;
}
