import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public newPassword : string;
  public confirmPassword : string;
  constructor(private toastr : ToastrService) { }

  ngOnInit() {
  }

  createPassword = () =>{

    if(this.newPassword !== this.confirmPassword){
      this.toastr.warning('Passwords do not match.')
    }


  }
}
