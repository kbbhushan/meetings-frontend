import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { AppService } from '../../app.service';
import { MeetingViewComponent } from '../meeting-view/meeting-view.component';



@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  constructor( private datePipe : DatePipe,
              private appService : AppService,private modalService: NgbModal,public activeModal: NgbActiveModal) { }
  year : string;
  month : string;
  day : string;

  ngOnInit() {

    this.year = this.datePipe.transform(this.date,'yyyy');
   this.month = this.datePipe.transform(this.date, 'MM');
    this.day = this.datePipe.transform(this.date, 'dd');

  }


@Input() meetingOnThisDay ;
@Input() meeting;
@Input() date;



editThisMeeting(){

  const modalRef = this.modalService.open(MeetingViewComponent, {size : 'lg'});
  
  modalRef.componentInstance.meeting = this.meeting;
  modalRef.componentInstance.date = this.date;
  modalRef.result.then((result)=>{

    console.log('Calling Edit Meeting', this.editMeeting(result))
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

deleteThisMeeting(){

  console.log("Meeting Deleted");
}

}
