import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import {DatePipe} from '@angular/common';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-meeting-view',
  templateUrl: './meeting-view.component.html',
  styleUrls: ['./meeting-view.component.css']
})
export class MeetingViewComponent implements OnInit {

  constructor(private appService : AppService,private modalService: NgbModal,public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  @Input() meeting;
  
  onClick() {
    console.log("Submit button was clicked!");
  }
  
  onSubmit() {
    console.log("Form was submitted!");
    this.activeModal.close(this.meeting);
  }

}
