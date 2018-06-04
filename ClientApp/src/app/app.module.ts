import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FetchGroupDataComponent } from './fetch-group-data/fetch-group-data.component';
import { createGroup } from './add-group-data/add-group-data.component'
import { FetchStudentDataComponent } from './fetch-student-data/fetch-student-data.component';
import { createStudent } from './add-student-data/add-student-data.component'
import { GroupService } from './services/group.service';
import { StudentService } from './services/student.service';
import { CourseService } from './services/course.service';
import { FetchCourseDataComponent } from './fetch-course-data/fetch-course-data.component';
import { createCourse } from './add-course-data/add-course-data.component'
import { groupDetail } from './group-detail/group-detail.component'
import { routes } from './imports/routes'


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FetchGroupDataComponent,
    createGroup,
    FetchStudentDataComponent,
    createStudent,
    FetchCourseDataComponent,
    createCourse,
    groupDetail
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [GroupService, StudentService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
