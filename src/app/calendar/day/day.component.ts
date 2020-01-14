import { Component, OnInit , Input, Output } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { AppService } from '../../app.service';
import {DatePipe} from '@angular/common';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
import { MeetingComponent } from '../meeting/meeting.component';
 
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
  meetingId:string;
  constructor(private _route : ActivatedRoute, private router:Router,private datePipe: DatePipe,
              private appService : AppService,private modalService: NgbModal,public activeModal: NgbActiveModal) { }
  
  @Input() date : Date;
  ngOnInit() {

    
    this.getMeeetingsOnThisDay();

  }
 
  getMeeetingsOnThisDay(){
    this.year = this.datePipe.transform(this.date,'yyyy');
   this.month = this.datePipe.transform(this.date, 'MM');
    this.day = this.datePipe.transform(this.date, 'dd');
    this.dayId = this.year+''+this.month+''+this.day;
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

  showMeetingDetails(meeting : any){
    console.log('Show Meeting Details Called in Day Component');
    console.log('Meeting Id clicked is ', meeting);
    const modalRef = this.modalService.open(MeetingComponent, {size : 'lg'});
    modalRef.componentInstance.meetingsOnThisDay = this.meetingsOnThisDay;
    modalRef.componentInstance.meeting = meeting;
    modalRef.componentInstance.date = this.date;
    modalRef.result.then((result)=>{

      console.log('Calling Edit Meeting')
    }, (reason) =>{   console.log('console msg from showMeetingDetails', reason)});
    
  }

  editMeeting(data){

    this.appService.editMeeting(data).subscribe((apiResponse) =>{

      if(apiResponse.status===200){
        console.log(apiResponse.data);
        console.log('update successful')
      }else{

        console.log('Error Occurred');
      }


    })
  }

}
