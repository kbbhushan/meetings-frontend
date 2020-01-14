import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { MyCalendarModule } from './calendar/calendar.module';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppService } from './app.service';
import { CalendarModule } from 'angular-calendar';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    UserModule,
    MyCalendarModule,
    AppRoutingModule,
   
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
