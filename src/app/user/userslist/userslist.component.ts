import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  public userslist =[];
  public isAdmin: boolean;
  constructor(private appService : AppService,private router:Router,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.isAdmin = /.*-admin$/.test(Cookie.get('userName'));
    this.appService.getUserslist().subscribe(
      (apiResponse)=>{
        if(apiResponse.status === 200 )
          {
            console.log(apiResponse.data)
            console.log('cookie',Cookie.get('userName'))
            for( let user of apiResponse.data){
             console.log(user["userName"])
              if(user["userName"] != Cookie.get('userName')){
              this.userslist.push(user["firstName"]+' '+user["lastName"]);
              }
            }
            console.log(this.userslist)
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

  public logout : any =() => {

    this.appService.logout().subscribe(
      (apiResponse) => {
        if(apiResponse.status===200){
          this.router.navigate(['/login'])            
         }else{
   
          this.toastr.error('Error Occurred');
         }
      },
      (error) => {this.toastr.error('Some error occurred')}

    )//end of subscribe
} //  end of logout

}
