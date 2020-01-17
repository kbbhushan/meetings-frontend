import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public userName : any;

  constructor(  public appService: AppService,
    public router : Router,
    public toastr : ToastrService ) { }

  ngOnInit() {
  }

  sendPasswordLink = () => {

    console.log('check email for password link');
    let data = {
      userName: this.userName      
    }

    this.appService.resetPassword(data).subscribe(
      (apiResponse)=> {
          if(apiResponse.status===200){
            this.toastr.info('Password link sent to Email.');
            this.router.navigate(['/login']);
          }else{
            this.toastr.error('Some Error Occurred');
          }
      },
      (error) => { this.toastr.error('Some Error Occurred');}
    );//end of subscribe
    
  }
}
