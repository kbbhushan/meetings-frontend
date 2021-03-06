import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { AppService } from '../../app.service';
import { MeetingEditComponent } from '../meeting-edit/meeting-edit.component';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService} from 'ngx-toastr';
import { SocketService} from '../../socket.service'



@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  constructor( private datePipe : DatePipe,
              private appService : AppService,private modalService: NgbModal,
              public activeModal: NgbActiveModal, private toastr:ToastrService,
              private socketService : SocketService) { }
  year : string;
  month : string;
  day : string;
  isAdmin : boolean;
  

  ngOnInit() {
    this.isAdmin = /.*-admin$/.test(Cookie.get('userName'));
    this.year = this.datePipe.transform(this.date,'yyyy');
   this.month = this.datePipe.transform(this.date, 'MM');
    this.day = this.datePipe.transform(this.date, 'dd');

    
  }


@Input() meetingOnThisDay ;
@Input() meeting;
@Input() date;



editThisMeeting(){

  const modalRef = this.modalService.open(MeetingEditComponent, {size : 'lg'});
  
  modalRef.componentInstance.meeting = this.meeting;
  modalRef.componentInstance.date = this.date;
  modalRef.result.then((result)=>{
    if(result){ 
      if(!result.purpose){this.toastr.warning('Meeting Agenda cannot be null')}
            else if(!result.startTime){this.toastr.warning('start time cannot be null')}
            else if(!result.endTime){this.toastr.warning('end time cannot be null')}
            else if(!result.location){this.toastr.warning('Enter meeting location')}
            else if(!(/[0-1][0-9][0-5][0-9]|[2][0-3][0-5][0-9]/.test(result.startTime))){
              this.toastr.warning('Start time is not valid')
            }else if(!(/[0-1][0-9][0-5][0-9]|[2][0-3][0-5][0-9]/.test(result.endTime))){
              this.toastr.warning('End time is not valid')
            }else if(result.startTime > result.endTime)
                {this.toastr.warning('End time should be after start time')}
            else{
                this.editMeeting(result);
                console.log(result)
                this.activeModal.close();
              }

  }}, 
  (reason) =>{   console.log('console msg from showMeetingDetails', reason)})
}

    
editMeeting(data){
  console.log("I came here")
  this.appService.editMeeting(data).subscribe(
    
    (apiResponse) =>{

        if(apiResponse.status===200){
          console.log(apiResponse.data);
          console.log('update successful');
          this.toastr.success('Meeting Edited Successfully!');
          this.socketService.sendMeetingUpdates('A meeting is Updated.');
        }else{

          console.log('Error Occurred');
        }
    },

    (error) => {  this.toastr.error('Error Occurred!') }
    )
}

deleteThisMeeting(data){

  this.appService.deleteMeeting(data).subscribe(
    (apiResponse) =>{

        if(apiResponse.status===200){
          console.log(apiResponse.data);
          console.log('Delete successful');
          this.toastr.success('Delete Successfull!');
          this.socketService.sendMeetingUpdates('A meeting is deleted.');
          this.activeModal.close();
        }else{

          console.log('Error Occurred');
        }
    },

    (error) => {  this.toastr.error('Error Occurred!') }
    )
}

}
