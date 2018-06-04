import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../services/group.service'
import { StudentData } from '../fetch-student-data/fetch-student-data.component';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css'],
  providers: [GroupService]
})
export class groupDetail {
  public group: GroupDetail;
  id: number;

  constructor(private _router: Router, private _groupService: GroupService, private _avRoute: ActivatedRoute) {
    this.id = this._avRoute.snapshot.params["id"];
    this.getData();
  }
  getData() {
    this._groupService.getGroupDetails(this.id).subscribe(data => {
      this.group = data;
    });
  }
}

export interface GroupDetail {
  course: string;
  id: number;
  name: string;
  students: StudentData[];
}

