import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../services/group-service.service'
@Component({
  selector: 'app-fetch-group-data',
  templateUrl: './fetch-group-data.component.html',
  providers: [GroupService]
})
export class FetchGroupDataComponent {
  public groupList: GroupData[] = [];

  constructor(private _router: Router, private _groupService: GroupService) {
    this.getGroups();
  }
  getGroups() {
    this._groupService.getGroups().subscribe(data => {
      this.groupList = data;
    });
  }
  delete(groupID) {
    var ans = confirm("Do you want to delete customer with Id: " + groupID);
    if (ans) {
      this._groupService.deleteGroup(groupID).subscribe((data) => {
        this.getGroups();
        alert(data);
      }, error => console.error(error))
    }
  }
}
export interface GroupData {
  id: number;
  name: string;
}
