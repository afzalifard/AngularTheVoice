import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidate} from './candidates/candidates.component';
import {Activity} from './activity/activity.component';
import {Mentor} from './team-list/team-list.component';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
  })
}



@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  private  baseUrl: string  = "http://127.0.0.1:8000";
  constructor(private  httpClient: HttpClient) {}

 // login user by email and password
  loginUser(email : string, password : string){
    try{
      let params = new HttpParams()
        // .set('_token',sessionToken)
        .set('email',email)
        .set('password',password);

        return this.httpClient.post(this.baseUrl+'/api/login', params);
     }
     catch(errorMessage)
     {
       console.log("loginUser catch : ");
       console.log(errorMessage);
       return null;
     }
  }

// get list of candidates of a mentor
  getCandidates(mentorId): Observable<Candidate[]>{
    try{
      return this.httpClient.get<Candidate[]>(this.baseUrl+'/candidate?mentor_id='+ mentorId , httpOptions);
    }
     catch(errorMessage)
     {
       console.log("getCandidates catch : ");
       console.log(errorMessage);
       return null;
     }
  }

  // get list of activites of a candidate
    getActivities(candidateId): Observable<Activity[]>{
      try{
        return this.httpClient.get<Activity[]>(this.baseUrl+'/activity?candidat_id='+ candidateId , httpOptions);
      }
       catch(errorMessage)
       {
         console.log("getActivities catch : ");
         console.log(errorMessage);
         return null;
       }
    }

    // get list of mentors as team list
      getTeams(): Observable<Mentor[]>{
        try{
          return this.httpClient.get<Mentor[]>(this.baseUrl+'/user' , httpOptions);
        }
         catch(errorMessage)
         {
           console.log("getMentors catch : ");
           console.log(errorMessage);
           return null;
         }
      }

      // get list of mentors as team list
        searchTeam(name): Observable<Mentor[]>{
          try{
            return this.httpClient.get<Mentor[]>(this.baseUrl+'/user?name='+name , httpOptions);
          }
           catch(errorMessage)
           {
             console.log("getMentors catch : ");
             console.log(errorMessage);
             return null;
           }
        }
}
