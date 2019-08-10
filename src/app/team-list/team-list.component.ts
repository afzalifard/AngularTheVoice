import { Component, OnInit, Inject } from '@angular/core';
import {ApiServicesService} from '../api-services.service';
import {Router, ActivatedRoute} from '@angular/router';

export  class  Mentor {
  name: string;
  id: string;
  phone: string;
  email: string;
  teamAverage :string;
  }

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  constructor( @Inject(ApiServicesService) private apiService:ApiServicesService,
    private router:Router, private route: ActivatedRoute ) {}
    teamList:Mentor[];
    teamName='';

  ngOnInit() {
    this.getTeamList();
  }

  getTeamList(){
      this.apiService.getTeams().subscribe(data=>{
        this.teamList = data['data'];
        }, (err)=>{
        console.log(err);
        });
      }

    search(){
      this.apiService.searchTeam(this.teamName).subscribe(data=>{
        this.teamList = data['data'];
        }, (err)=>{
        console.log(err);
        });
    }
}
