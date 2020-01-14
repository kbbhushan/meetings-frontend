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
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.css'],
  templateUrl: './calendar.component.html'
})
export class CalendarComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  dateClicked : Date ;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;

  constructor(private modalService: NgbModal,
    private datePipe : DatePipe,public router: Router,private appService : AppService,
    private toastr: ToastrService,
    vcr: ViewContainerRef
    ) {}

    ngOnInit() {
      
      this.getMeetingsInThisMonth();
    }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log('date clicked is ', date);
    this.dateClicked = date; 
    // this.modalData = { event, action };
    //this.modal.open(this.modalContent, { size: 'lg' });
    const modalRef = this.modalService.open(DayComponent);
    modalRef.componentInstance.date = date;
    
    console.log('view date is ', this.viewDate);
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }                                                                                                                                                                                                                                                                                                                                                                                                                                     

  handleEvent(action: string, event: CalendarEvent): void {
   // this.modalData = { event, action };
    //this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
    
   // console.log('view-',this.view,'viewDate',this.viewDate);
    this.getMeetingsInThisMonth();
    
  }

  getMeetingsInThisMonth(){
   
    let year = this.datePipe.transform(this.viewDate,'yyyy');
    let month = this.datePipe.transform(this.viewDate, 'MM');
   // console.log(this.viewDate);
    console.log("year-",year,'month-',month);
    this.appService.getMeetingsInAMonth({month: year+month}).subscribe((apiResponse) =>{

      if(apiResponse.status===200){
        console.log(apiResponse.data);
       //this.meetingsInThisMonth = apiResponse.data;
        //this.meetingDays=this.meetingsInThisMonth
      }else{

        console.log('Error Occurred');
      }


    })
  }///end of getMeetingsInThisMonth

}
