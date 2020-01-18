import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
import { SocketService} from '../../socket.service'

@Component({
  selector: 'app-meeting-create',
  templateUrl: './meeting-create.component.html',
  styleUrls: ['./meeting-create.component.css']
})
export class MeetingCreateComponent implements OnInit {

  constructor(private appService : AppService,
              private modalService: NgbModal,
              public activeModal: NgbActiveModal,
              private datePipe: DatePipe,
              private toastr : ToastrService,
              private router : Router,
              private socketService : SocketService
            ) { }

  ngOnInit() {
    if(this.date.getDate() < new Date().getDate()){
      this.toastr.error('Cannot create back dated meetings.');
      this.activeModal.dismiss();
    }
    
    this.meetingDay = this.datePipe.transform(this.date,'yyyy')+''+
    this.datePipe.transform(this.date, 'MM')+''+
    this.datePipe.transform(this.date, 'dd');
    this.userInfo=this.appService.getUserInfoFromLocalstorage();
    this.meetingCreatedBy = this.userInfo.firstName+' '+this.userInfo.lastName;
   
  }
  @Input() date;

  public meetingDay : any;
  public userInfo :any;
  public meetingStartTime: string;
  public meetingEndTime: string;
  public meetingLocation:any;
  public meetingPurpose: string;
  public meetingCreatedBy :any;
  public todayDate:Date;

  onClick() {
    console.log("Submit button was clicked!");
  }
  
  onSubmit() {
      
      if(!this.meetingPurpose){this.toastr.warning('Enter meeting agenda')}
      else if(!this.meetingStartTime){this.toastr.warning('Enter meeting start time')}
      else if(!this.meetingEndTime){this.toastr.warning('Enter meeting end time')}
      else if(!this.meetingLocation){this.toastr.warning('Enter meeting location')}
      else if(!(/[0-1][0-9][0-5][0-9]|[2][0-3][0-5][0-9]/.test(this.meetingStartTime))){
        this.toastr.warning('Start time is not valid')
      }else if(!(/[0-1][0-9][0-5][0-9]|[2][0-3][0-5][0-9]/.test(this.meetingEndTime))){
        this.toastr.warning('End time is not valid')
      }else if(this.meetingStartTime>this.meetingEndTime)
          {this.toastr.warning('End time should be after start time')}
      else{

     let meeting = {
      meetingDay :this.meetingDay,
      startTime:this.meetingStartTime,
      endTime:this.meetingEndTime,
      where:this.meetingLocation,
      purpose:this.meetingPurpose,
      createdBy:this.meetingCreatedBy
    }
    
    this.appService.createMeeting(meeting).subscribe(

      (apiResponse) =>{

        if(apiResponse.status===200){
          console.log(apiResponse.data);
          this.toastr.success('Meeting Created Successfully!');
          this.socketService.sendMeetingUpdates('A new meeting is created.')
        }else{
          this.toastr.error('Error Occurred!');
          console.log('Error Occurred');
        }
      },

      (error) => {  this.toastr.error('Error Occurred!') }



    ) 
    this.activeModal.close();
      }


  }

}
