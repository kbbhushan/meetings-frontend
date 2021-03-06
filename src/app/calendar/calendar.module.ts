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
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MeetingComponent } from './meeting/meeting.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MeetingEditComponent } from './meeting-edit/meeting-edit.component';
import { MeetingCreateComponent } from './meeting-create/meeting-create.component'





@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModalModule,NgbModule,
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
  declarations: [CalendarComponent, DayComponent, MeetingComponent, MeetingEditComponent, MeetingCreateComponent],
  entryComponents :[DayComponent, MeetingComponent, MeetingEditComponent, MeetingCreateComponent]
})
export class MyCalendarModule { }
