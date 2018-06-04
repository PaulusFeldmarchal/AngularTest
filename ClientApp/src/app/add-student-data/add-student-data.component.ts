import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../services/group.service'

@Component({
  selector: 'createstudent',
  templateUrl: './add-student-data.component.html'
})
export class createStudent implements OnInit {
  public groupList: GroupData[] = [];
  studentForm: FormGroup;
  title: string = "Create";
  id: number;
  errorMessage: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _studentService: StudentService, private _router: Router, private _groupService: GroupService) {
    this.getGroups();
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.studentForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required]],
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
      this._studentService.getStudentById(this.id)
        .subscribe(resp => this.studentForm.setValue(resp)
          , error => this.errorMessage = error);
    }
  }

  save() {
    if (!this.studentForm.valid) {
      return;
    }
    if (this.title == "Create") {
      this._studentService.saveStudent(this.studentForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-student-data']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._studentService.updateStudent(this.studentForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-student-data']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-student-data']);
  }

  get name() { return this.studentForm.get('name');
  }

  get groupId() { return this.studentForm.get('groupId') }
}
export interface GroupData {
  id: number;
  name: string;
}
