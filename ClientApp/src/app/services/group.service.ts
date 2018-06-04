import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BaseService } from './base.service';

@Injectable()
export class GroupService extends BaseService {

  getGroups() {
    return this.getElements('Group/');
  }

  getGroupById(id: number) {
    return this.getElemById('Group/Details/', id);
  }

  getGroupDetails(id: number) {
    return this.customGetQuery("Group/About/", id);
  }

  saveGroup(group) {
    return this.save('Group/Create', group);
  }

  updateGroup(group) {
    return this.update('Group/Edit', group);
  }

  deleteGroup(id) {
    return this.delete('Group/Delete/', id);
  }
}
