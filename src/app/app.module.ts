import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { CalendarModule } from './calendar/calendar.module';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    UserModule,
    CalendarModule,
    AppRoutingModule,
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
