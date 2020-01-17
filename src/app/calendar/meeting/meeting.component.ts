import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { AppService } from '../../app.service';
import { MeetingEditComponent } from '../meeting-edit/meeting-edit.component';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService} from 'ngx-toastr'



@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  constructor( private datePipe : DatePipe,
              private appService : AppService,private modalService: NgbModal,
              public activeModal: NgbActiveModal, private toastr:ToastrService) { }
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
      this.editMeeting(result);
    }
    this.activeModal.close();
  }, (reason) =>{   console.log('console msg from showMeetingDetails', reason)});
}

editMeeting(data){

  this.appService.editMeeting(data).subscribe(
    
    (apiResponse) =>{

        if(apiResponse.status===200){
          console.log(apiResponse.data);
          console.log('update successful');
          this.toastr.success('Meeting Edited Successfully!')
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
          this.toastr.success('Delete Successfull!')
          this.activeModal.close();
        }else{

          console.log('Error Occurred');
        }
    },

    (error) => {  this.toastr.error('Error Occurred!') }
    )
}

}
