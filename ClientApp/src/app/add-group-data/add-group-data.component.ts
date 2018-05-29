import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchGroupDataComponent } from '../fetch-group-data/fetch-group-data.component';
import { GroupService } from '../services/group-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'creategroup',
  templateUrl: './add-group-data.component.html'
})
export class createGroup implements OnInit {
  groupForm: FormGroup;
  title: string = "Create";
  id: number;
  errorMessage: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _groupService: GroupService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.groupForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required]]
    })
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
