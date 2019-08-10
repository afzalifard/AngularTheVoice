import { Component, OnInit, Inject } from '@angular/core';
import {ApiServicesService} from '../api-services.service';
import {Router , ActivatedRoute} from '@angular/router';

export  class  Activity {
  song_name: string;
  date: string;
  average_scores:string;
  }

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor( @Inject(ApiServicesService) private apiService:ApiServicesService,
    private router:Router, private route: ActivatedRoute ) {}
    ActivityList:Activity[];
    candidateId:number;

  ngOnInit() {
    this.candidateId = +this.route.snapshot.paramMap.get('id');
      this.getActivityList();
  }
  getActivityList(){
      this.apiService.getActivities(this.candidateId).subscribe(data=>{
        console.log(data);
        console.log('nnnnnnnn');
        this.ActivityList = data['data'];
        }, (err)=>{
        console.log(err);
        });
      }

}
