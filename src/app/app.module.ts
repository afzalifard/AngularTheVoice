import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { TeamListComponent } from './team-list/team-list.component';
import { ActivityComponent } from './activity/activity.component';
import {ApiServicesService} from './api-services.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatesComponent,
    TeamListComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiServicesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
