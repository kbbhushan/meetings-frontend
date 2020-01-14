import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-meeting-create',
  templateUrl: './meeting-create.component.html',
  styleUrls: ['./meeting-create.component.css']
})
export class MeetingCreateComponent implements OnInit {

  constructor(private appService : AppService,
              private modalService: NgbModal,
              public activeModal: NgbActiveModal,
              private datePipe: DatePipe
            ) { }

  ngOnInit() {

    this.meetingDay = this.datePipe.transform(this.date,'yyyy')+''
    this.datePipe.transform(this.date, 'MM')+''
   this.datePipe.transform(this.date, 'dd');

  }
  @Input() date;

  public meetingDay : any;
 
  public startTime: any;
  public endTime: any;
  public where:any;
  public purpose:any;
  public createdBy :any;

  onClick() {
    console.log("Submit button was clicked!");
  }
  
  onSubmit() {
    console.log("Form was submitted!");
   /*  let meeting = {
      meetingDay :this.meetingDay,
      startTime:this.startTime,
      endTime:this.endTime,
      where:this.where,
      purpose:this.purpose,
      createdBy:this.createdBy
    }

    this.appService.createMeeting(meeting).subscribe(

      (apiResponse) =>{

        if(apiResponse.status===200){
          console.log(apiResponse.data);
         
        }else{
  
          console.log('Error Occurred');
        }
  
  
      }



    ) */
    this.activeModal.close();
  }

}
