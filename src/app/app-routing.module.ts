import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatesComponent} from './candidates/candidates.component';
import {ActivityComponent} from './activity/activity.component';
import {TeamListComponent} from './team-list/team-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'candidates/:id', component: CandidatesComponent },
  { path: 'activities/:id', component: ActivityComponent },
  { path: 'teamList', component: TeamListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
