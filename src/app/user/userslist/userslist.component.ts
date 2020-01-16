import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  public userslist =[];
  constructor(private appService : AppService,private router:Router,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.appService.getUserslist().subscribe(
      (apiResponse)=>{
        if(apiResponse.status === 200 )
          {
            console.log(apiResponse)
            for( let user in apiResponse.data){
              console.log(apiResponse.data[user])
              this.userslist.push(apiResponse.data[user]);
            }
          }else{
            this.toastr.error(apiResponse.message);
          }
      },//end of apiResonse
      (error ) => {
        this.toastr.error(error)
      }
    )//end of subscribe
  }

  goToCalendarView = () => {

    this.router.navigate(['/calendar']);
  }

}
