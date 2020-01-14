import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private datePipe : DatePipe) { }
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

onClick() {
  console.log("Submit button was clicked!");
}

onSubmit() {
  console.log("Form was submitted!");
  this.activeModal.close(this.meeting);
}

editThisMeeting(){

   console.log("Meeting Edited");
}

deleteThisMeeting(){

  console.log("Meeting Deleted");
}

}
