import { Component, OnInit , Inject } from '@angular/core';
import {ApiServicesService} from '../api-services.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( @Inject(ApiServicesService) private apiService:ApiServicesService,
    private router:Router, private route: ActivatedRoute ) {}
  email:string;
  password:string;
  loginHidden = false;
  ngOnInit() {
  }

  login(){  console.log('hhh')
    this.apiService.loginUser(this.email, this.password).subscribe(
      data=>{
        this.loginHidden = true;
        if(data['role_id'] == 2){
            this.router.navigate(['/candidates',data['user_id']], {skipLocationChange: true});
        }
        else if(data['role_id'] == 1){
            this.router.navigate(['/teamList'], {skipLocationChange: true});
        }
        console.log(data);
        console.log('dddddddddddddddd');
      }, (err)=>{
        console.log('eeeeeeeeeeeeeeee');
        console.log(err);
      }
    );
  }
}
