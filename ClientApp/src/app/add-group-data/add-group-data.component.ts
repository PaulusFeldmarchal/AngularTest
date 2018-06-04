import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchGroupDataComponent } from '../fetch-group-data/fetch-group-data.component';
import { GroupService } from '../services/group.service';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'creategroup',
  templateUrl: './add-group-data.component.html'
})
export class createGroup implements OnInit {
  public courseList: CourseData[] = [];
  groupForm: FormGroup;
  title: string = "Create";
  id: number;
  errorMessage: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _groupService: GroupService, private _router: Router, private _courseService: CourseService) {
    this.getCourses();
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.groupForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required]],
      courseId: 0
    })
  }

  getCourses() {
    this._courseService.getCourses().subscribe(data => {
      this.courseList = data;
    });
  }

  ngOnInit() {
    if (this.id > 0) {
      this.title = "Edit";
      this._groupService.getGroupById(this.id)
        .subscribe(resp => this.groupForm.setValue(resp)
          , error => this.errorMessage = error);
    }
  }

  save() {
    if (!this.groupForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this._groupService.saveGroup(this.groupForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-group-data']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._groupService.updateGroup(this.groupForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-group-data']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-group-data']);
  }
  get name() { return this.groupForm.get('name'); }

}

export interface CourseData {
  id: number;
  specialization: string;
}
