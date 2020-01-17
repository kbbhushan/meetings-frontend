import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public newPassword : string;
  public confirmPassword : string;

  userId : string;
  authToken:string;
  constructor(private toastr : ToastrService,private _route: ActivatedRoute, 
    private router: Router , private appService : AppService) { }

  ngOnInit() {
    this.userId = this._route.snapshot.paramMap.get('userId');
    this.authToken = this._route.snapshot.paramMap.get('authToken');
  }

  createPassword = () =>{

    if(this.newPassword !== this.confirmPassword){
      this.toastr.warning('Passwords do not match.')
    }else{
      let data = {
        userId: this.userId,
        authToken: this.authToken,
        password: this.newPassword
      }
      this.appService.updatePassword(data).subscribe(
        (apiResponse) => {

          if(apiResponse.status===200){
            this.toastr.success('Password Updated Successfully.')
            this.router.navigate(['/login'])
          }
          else{
            this.toastr.error('Error while updating password')
          }
        },
        (error)=> {
          this.toastr.error('Error while updating password')
        }

      )//end of subscribe
    }


  }
}
