import { Component, OnInit, Inject } from '@angular/core';
import {ApiServicesService} from '../api-services.service';
import {Router, ActivatedRoute} from '@angular/router';

export  class  Candidate {
  name: string;
  id: string;
  phone: string;
  mentor_id: string;
  score: string;
  }

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  constructor( @Inject(ApiServicesService) private apiService:ApiServicesService,
    private router:Router, private route: ActivatedRoute ) {}
    candidateList:Candidate[];
    mentorId:number;

  ngOnInit() {
      this.mentorId = +this.route.snapshot.paramMap.get('id');
      this.getCandidateList();
  }
  getCandidateList(){
      this.apiService.getCandidates(this.mentorId).subscribe(data=>{
        console.log(data);
        console.log('nnnnnnnn');
        this.candidateList = data['data'];
        }, (err)=>{
        console.log(err);
        });
      }
}
