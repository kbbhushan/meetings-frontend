import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'http://localhost:3000';

  private socket;


  constructor(public http: HttpClient) {
    // connection is being created.
    // that handshake
    this.socket = io(this.url);

  }

  // events to be listened 

  public verifyUser = () => {

    return Observable.create((observer) => {

      this.socket.on('verifyUser', (data) => {

        observer.next(data);

      }); // end Socket

    }); // end Observable

  } // end verifyUser

  public authError = () => {

    return Observable.create((observer) => {

      this.socket.on('auth-error', (data) => {

        observer.next(data);

      }); // end Socket

    }); // end Observable

  } // end authError

  public onlineUserList = () => {

    return Observable.create((observer) => {

      this.socket.on("online-user-list", (userList) => {

        observer.next(userList);

      }); // end Socket

    }); // end Observable

  } // end onlineUserList

  /**
   * This function will receive the updates about meetings.
   */
  public getMeetingUpdates = () => {

    return Observable.create((observer) => {

      this.socket.on("meetingupdate", (data) => {

        observer.next(data);

      }); // end Socket

    }); // end Observable

  } // end getMeetingUpdates


  public disconnectedSocket = () => {

    return Observable.create((observer) => {

      this.socket.on("disconnect", () => {

        observer.next();

      }); // end Socket

    }); // end Observable



  } // end disconnectSocket

  // events to be emitted

  /**
   * When a meeting is created, updated or deleted, this event is emitted.
   */
  public sendMeetingUpdates = (data) => {

    this.socket.emit("meetingupdate", (data)) // end Socket

  } // end sendMeedtingUpdates


  public setUser = (authToken) => {
    this.socket.emit("set-user", authToken);
  } // end setUser


  public exitSocket = () => {
    this.socket.disconnect();
  }// end exit socket




  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError

}
