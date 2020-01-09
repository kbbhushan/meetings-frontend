import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { AppService } from '../../app.service';
 
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  dayId : string;
  year:string;
  month:string;
  day:string;
  meetingsOnThisDay=[];
  constructor(private _route : ActivatedRoute, private router:Router,
              private appService : AppService) { }
  

  ngOnInit() {

    this.dayId = this._route.snapshot.paramMap.get('day');
    this.year = this.dayId.substring(0,4);
  this.month = this.dayId.substring(4,6);
  this.day = this.dayId.substring(6);
    this.getMeeetingsOnThisDay();

  }
 
  getMeeetingsOnThisDay(){

    console.log('In getMeetingsOnThisDay function', this.dayId);
    this.appService.getMeetingsOnADay({day: this.dayId}).subscribe((apiResponse) =>{

      if(apiResponse.status===200){
        console.log(apiResponse.data);
        this.meetingsOnThisDay = apiResponse.data;
      }else{

        console.log('Error Occurred');
      }


    })
  }

}
