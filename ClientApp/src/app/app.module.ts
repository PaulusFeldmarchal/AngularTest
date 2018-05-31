import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchGroupDataComponent } from './fetch-group-data/fetch-group-data.component';
import { createGroup } from './add-group-data/add-group-data.component'
import { FetchStudentDataComponent } from './fetch-student-data/fetch-student-data.component';
import { createStudent } from './add-student-data/add-student-data.component'
import { GroupService } from './services/group-service.service';
import { StudentService } from './services/student-service.service';
import { CourseService } from './services/course-service.service';
//import { create } from 'domain';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchGroupDataComponent,
    createGroup,
    FetchStudentDataComponent,
    createStudent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-group-data', component: FetchGroupDataComponent },
      { path: 'register-group', component: createGroup },
      { path: 'group/edit/:id', component: createGroup },
      { path: 'fetch-student-data', component: FetchStudentDataComponent },
      { path: 'register-student', component: createStudent },
      { path: 'student/edit/:id', component: createStudent },
      { path: '**', redirectTo: 'home' }  
    ])
  ],
  providers: [GroupService, StudentService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
