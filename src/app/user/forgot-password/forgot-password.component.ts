import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public userName : any;

  constructor(  public appService: AppService,
    public router : Router) { }

  ngOnInit() {
  }

  sendPasswordLink = () => {

    console.log('check email for password link');
    this.router.navigate(['/login']);
  }
}
