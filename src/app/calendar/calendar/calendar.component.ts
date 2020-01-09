import { Component, OnInit , ViewContainerRef } from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService} from '../../app.service'


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  ngOnInit() {
    this.calculateDayOfThisMonth();
    this.getMeetingsInThisMonth();
  }

  constructor ( private datePipe : DatePipe,public router: Router,private appService : AppService,
    private toastr: ToastrService,
    vcr: ViewContainerRef){
    
  }

  title = 'calendar';
  viewDate: Date  = new Date();
  value:number = 5;
  year:string;
  month:string;
  id1:number;
  empty:' ';
  meetingsInThisMonth =[];
  meetingDays=[];
  monthName:string="";
  monthArr :any[][]=[[true, true, true, true, true, true, true],
                      [true, true, true, true, true, true, true],
                      [true, true, true, true, true, true, true],
                      [true, true, true, true, true, true, true],
                      [true, true, true, true, true, true, true],
                      [true, true, true, true, true, true, true]
                    ];
 
  clik($event :number){

    
    
    let day = this.year+ this.month + (($event+'').length == 1 ? '0'+$event : $event)
    console.log('the day clicked is ', day);
   this.router.navigate(['/day',day])
  }

  calculateDayOfThisMonth(){

    this.year = this.datePipe.transform(new Date(),'yyyy');
    this.month = this.datePipe.transform(new Date(),'MM');
    console.log('this.month value is ', this.month)
    this.monthName = this.datePipe.transform(new Date(),'MMMM');
    this.id1 = +this.datePipe.transform(new Date(),'yyyyMMdd');
    this.id1=1
    idofdate:Number;
    let date = new Date(+this.year, +this.month-1, 1);
    let startDay = this.datePipe.transform(date,'EEE');
    console.log('starting day of this month is ', startDay);
    let noOfDays =0;
  let days = [];
  
  while (date.getMonth() === +this.month-1) {
    noOfDays++;
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

    console.log(this.year ,this.month, noOfDays);
    let countOfDays = noOfDays;
    
    for(let i=0;i<=0;i++){
       
        for(let j=0;j<3;j++){
            this.monthArr[i][j]=false;
            
        }
        i=1;
    }
   let k=0;
    for (let i =0; i< 6; i++){
      
     // this.monthArr[i]=[];
      for (let j=0;j<7;j++ ){
       
        if(countOfDays>0 && this.monthArr[i][j]!=false){
          this.monthArr[i][j]=++k;
       // this.monthArr[i][j]=year+""+month+""+ (k < 9 ? 0+""+k : k);
       
        countOfDays--;
        }
        else{
         
          this.monthArr[i][j]=false;
        }
      }
    }
   
  }

  getMeetingsInThisMonth(){
    console.log('In getMeetingInThisMonth function', this.year, this.month);
    this.appService.getMeetingsInAMonth({month: this.year+this.month}).subscribe((apiResponse) =>{

      if(apiResponse.status===200){
        console.log(apiResponse.data);
        this.meetingsInThisMonth = apiResponse.data;
        //this.meetingDays=this.meetingsInThisMonth
      }else{

        console.log('Error Occurred');
      }


    })
}
}