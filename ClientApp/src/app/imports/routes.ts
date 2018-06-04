import { Routes } from "@angular/router";
import { groupDetail } from "../group-detail/group-detail.component";
import { createCourse } from "../add-course-data/add-course-data.component";
import { FetchCourseDataComponent } from "../fetch-course-data/fetch-course-data.component";
import { createStudent } from "../add-student-data/add-student-data.component";
import { FetchStudentDataComponent } from "../fetch-student-data/fetch-student-data.component";
import { createGroup } from "../add-group-data/add-group-data.component";
import { FetchGroupDataComponent } from "../fetch-group-data/fetch-group-data.component";

export const routes: Routes = [
  { path: '', component: FetchGroupDataComponent, pathMatch: 'full' },
  { path: 'fetch-group-data', component: FetchGroupDataComponent },
  { path: 'register-group', component: createGroup },
  { path: 'group/edit/:id', component: createGroup },
  { path: 'fetch-student-data', component: FetchStudentDataComponent },
  { path: 'register-student', component: createStudent },
  { path: 'student/edit/:id', component: createStudent },
  { path: 'fetch-course-data', component: FetchCourseDataComponent },
  { path: 'register-course', component: createCourse },
  { path: 'course/edit/:id', component: createCourse },
  { path: 'group/detail/:id', component: groupDetail },
];
