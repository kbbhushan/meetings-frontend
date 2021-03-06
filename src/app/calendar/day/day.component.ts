import { Component, OnInit , Input, Output } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { AppService } from '../../app.service';
import {DatePipe} from '@angular/common';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
import { MeetingComponent } from '../meeting/meeting.component';
import { MeetingCreateComponent } from '../meeting-create/meeting-create.component';
import { Cookie } from 'ng2-cookies/ng2-cookies'
 
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
  isAdmin:boolean;
  constructor(private _route : ActivatedRoute, private router:Router,private datePipe: DatePipe,
              private appService : AppService,private modalService: NgbModal,public activeModal: NgbActiveModal) { }
  
  @Input() date : Date;
  ngOnInit() {

    
    this.getMeeetingsOnThisDay();
    this.isAdmin = /.*-admin$/.test(Cookie.get('userName'));
    
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
   
    const modalRef = this.modalService.open(MeetingComponent, {size : 'lg'});
    modalRef.componentInstance.meetingsOnThisDay = this.meetingsOnThisDay;
    modalRef.componentInstance.meeting = meeting;
    modalRef.componentInstance.date = this.date;
    modalRef.result.then((result)=>{
      this.getMeeetingsOnThisDay();
    }, (reason) =>{   console.log('console msg from showMeetingDetails', reason)});
    
  }

  createMeeting(){

    console.log('Create Meeting called');
    const modalRef = this.modalService.open(MeetingCreateComponent, {size : 'lg'});
    modalRef.componentInstance.date = this.date;
    modalRef.result.then((result)=>{
      this.getMeeetingsOnThisDay();
    }, (reason) =>{   console.log('console msg from showMeetingDetails', reason)});
     
  }

}
