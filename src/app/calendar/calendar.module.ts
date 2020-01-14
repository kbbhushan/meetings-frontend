import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';
import { DayComponent } from './day/day.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MeetingComponent } from './meeting/meeting.component';
import { FormsModule} from '@angular/forms'





@NgModule({
  imports: [
    CommonModule, FormsModule,
    BrowserAnimationsModule,
    NgbModalModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([ 
      { path: 'calendar', component: CalendarComponent },
      { path: 'day/:day', component: DayComponent }
    ]),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers:[DatePipe],
  declarations: [CalendarComponent, DayComponent, MeetingComponent],
  entryComponents :[DayComponent, MeetingComponent]
})
export class MyCalendarModule { }
