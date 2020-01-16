import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import {  OnInit , ViewContainerRef } from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService} from '../../app.service';
import { DayComponent } from '../day/day.component';
import { SocketService } from '../../socket.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.css'],
  templateUrl: './calendar.component.html'
})
export class CalendarComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  dateClicked : Date ;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh: Subject<any> = new Subject();

  meetingsInThisMonth =[];
  events: CalendarEvent[]=[];
  

  activeDayIsOpen: boolean = false;

  constructor(private modalService: NgbModal,
    private datePipe : DatePipe,public router: Router,private appService : AppService,
    private SocketService: SocketService,
    private toastr: ToastrService,
    vcr: ViewContainerRef
    ) {}

    ngOnInit() {
      this.toastr.success('Welcome !!!');
      this.checkStatus();
      this.verifyUserConfirmation();
      this.getMeetingsInThisMonth();
    }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    
    this.dateClicked = date; 
    const modalRef = this.modalService.open(DayComponent);
    modalRef.componentInstance.date = date;
    modalRef.result.then((result)=>{
      this.getMeetingsInThisMonth();
    }, (reason) =>{   console.log('console msg from showMeetingDetails', reason)});
    
  }

 
  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    
    this.activeDayIsOpen = false;
    this.getMeetingsInThisMonth();
    
  }

  getMeetingsInThisMonth(){
   
    let year = this.datePipe.transform(this.viewDate,'yyyy');
    let month = this.datePipe.transform(this.viewDate, 'MM');
    
    this.appService.getMeetingsInAMonth({month: year+month}).subscribe((apiResponse) =>{

      if(apiResponse.status===200){
        
       this.meetingsInThisMonth = apiResponse.data;
       console.log(this.meetingsInThisMonth);
       this.loadEvents();
       
      }else{

        console.log('Error Occurred');
      }
    })
;

     
  }///end of getMeetingsInThisMonth

  loadEvents():any{
    this.events=[];
    this.meetingsInThisMonth.forEach((meeting)=> {
      let starthours = meeting.startTime.toString().substring(0,2);
      let startMins = meeting.startTime.toString().substring(2);
      let endhours = meeting.endTime.toString().substring(0,2);
      let endMins = meeting.endTime.toString().substring(2);
      
      this.events.push({"title" : meeting.purpose,
                          "start" : new Date(meeting.meetingDay.substring(0,4),//year
                                              meeting.meetingDay.substring(4,6)-1,//month starts at 0
                                              meeting.meetingDay.substring(6), //day
                                              starthours, startMins
                                            ),
                          "end":new Date(meeting.meetingDay.substring(0,4),//year
                          meeting.meetingDay.substring(4,6)-1,//month starts at 0
                          meeting.meetingDay.substring(6), //day
                          endhours,endMins
                        ),
                          "color" : colors.yellow
      })
          });
      this.refresh.next();
      console.log(this.events);
  }

  public checkStatus: any = () => {

    if (Cookie.get('authtoken') === undefined || Cookie.get('authtoken') === '' || Cookie.get('authtoken') === null) {

      this.router.navigate(['/login']);

      return false;

    } else {

      return true;

    }

  } // end checkStatus

  public verifyUserConfirmation: any = () => {

    this.SocketService.verifyUser()
      .subscribe((data) => {

       // this.disconnectedSocket = false;

        this.SocketService.setUser(Cookie.get('authtoken'));

      });
    }
}
