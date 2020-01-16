import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService} from 'ngx-toastr'
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
              private toastr : ToastrService
            ) { }

  ngOnInit() {

    this.meetingDay = this.datePipe.transform(this.date,'yyyy')+''+
    this.datePipe.transform(this.date, 'MM')+''+
   this.datePipe.transform(this.date, 'dd');
   this.meetingStartTime = {hour: 10, minute: 30};
   this.meetingEndTime = {hour: 11, minute: 30};
  }
  @Input() date;

  public meetingDay : any;
 
  public meetingStartTime: any;
  public meetingEndTime: any;
  public meetingLocation:any;
  public meetingPurpose: string;
  public meetingCreatedBy :any;

  onClick() {
    console.log("Submit button was clicked!");
  }
  
  onSubmit() {
    console.log("Form was submitted!");
     let meeting = {
      meetingDay :this.meetingDay,
      startTime:this.meetingStartTime.hour+''+this.meetingStartTime.minute,
      endTime:this.meetingEndTime.hour+''+this.meetingEndTime.minute,
      where:this.meetingLocation,
      purpose:this.meetingPurpose,
      createdBy:this.meetingCreatedBy
    }
    console.log(meeting.startTime , '<- start and end time -> ', meeting.endTime);
    this.appService.createMeeting(meeting).subscribe(

      (apiResponse) =>{

        if(apiResponse.status===200){
          console.log(apiResponse.data);
          this.toastr.success('Meeting Created Successfully!');
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
