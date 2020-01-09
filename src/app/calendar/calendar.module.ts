import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';
import { DayComponent } from './day/day.component'



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([ 
      { path: 'calendar', component: CalendarComponent },
      { path: 'day/:day', component: DayComponent }
    ]),
    
  ],
  providers:[DatePipe],
  declarations: [CalendarComponent, DayComponent]
})
export class CalendarModule { }
