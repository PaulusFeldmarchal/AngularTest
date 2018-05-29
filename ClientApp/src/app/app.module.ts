import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchGroupDataComponent } from './fetch-group-data/fetch-group-data.component';
import { createGroup } from './add-group-data/add-group-data.component'
import { GroupService } from './services/group-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchGroupDataComponent,
    createGroup
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-group-data', component: FetchGroupDataComponent },
      { path: 'register-employee', component: createGroup },
      { path: 'employee/edit/:id', component: createGroup },
      { path: '**', redirectTo: 'home' }  
    ])
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
