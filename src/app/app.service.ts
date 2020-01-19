import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import {Cookie} from 'ng2-cookies/ng2-cookies';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';


@Injectable()
export class AppService {

  private url =  'http://localhost:3000';

  constructor(
    public http: HttpClient
  ) {

    

  } // end constructor  


  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) =>{

    localStorage.setItem('userInfo', JSON.stringify(data))


  }

  public signupFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('userName',data.userName)
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobileNumber)
      .set('email', data.email)
      .set('password', data.password);
      

    return this.http.post(`${this.url}/api/v1/users/signup`, params);

  } // end of signupFunction function.

  public signinFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('userName', data.userName)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/login`, params);
  } // end of signinFunction function.

  public getUserslist(): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
      
        'authToken': Cookie.get('authtoken')
      })
    };
    return this.http.get(`${this.url}/api/v1/users/userslist`,httpOptions).pipe(
      catchError(this.handleError)
    );
  } // end of getUserslist function.


  public getMeetingsInAMonth(data): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
      
        'authToken': Cookie.get('authtoken')
      })
    };
    return this.http.get(`${this.url}/api/v1/meetings/month/`+data.month,httpOptions).pipe(
      catchError(this.handleError)
    );
  } // end of getMeetingsInAMonth function.

  public getMeetingsOnADay(data): Observable<any> {

    /* authToken can also be added to data as in other functions. 
    It is here just added to see about httpOptions. This throwed CORS error.
    So, also modified routeLogger.js in backend middlewares to allow authToken in http headers.*/
    const httpOptions = {
      headers: new HttpHeaders({
        'authToken': Cookie.get('authtoken')
      })
    };

    return this.http.get(`${this.url}/api/v1/meetings/day/`+data.day , httpOptions).pipe(
      catchError(this.handleError)
    );
  } // end of getMeetingsInAMonth function.

  public editMeeting(data): Observable<any> {

    data['authToken'] = Cookie.get('authtoken');
    console.log('data is edit Meeting', data)
    return this.http.put(`${this.url}/api/v1/meetings/edit/`+data.meetingId, data).pipe(
      catchError(this.handleError)
    );
  } 

  public deleteMeeting(data): Observable<any> {
    data['authToken'] = Cookie.get('authtoken');
    return this.http.post(`${this.url}/api/v1/meetings/delete/`+data.meetingId, data).pipe(
      catchError(this.handleError)
    );
  } 

  public createMeeting(data): Observable<any> {
    data['authToken'] = Cookie.get('authtoken');
    return this.http.post(`${this.url}/api/v1/meetings/create`, data).pipe(
      catchError(this.handleError)
    );
  }

  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))

    return this.http.post(`${this.url}/api/v1/users/logout`, params).pipe(
      catchError(this.handleError)
    );

  } // end logout function

  public resetPassword(data): Observable<any> {

    const params = new HttpParams()
      .set('userName', data.userName)

    return this.http.post(`${this.url}/api/v1/users/password-reset`, params).pipe(
      catchError(this.handleError)
    );

  } // end reset Password function

  public updatePassword(data): Observable<any> {
    
    return this.http.post(`${this.url}/api/v1/users/updatePassword`, data).pipe(
      catchError(this.handleError)
    );

  } // end update password function


  

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return throwError(errorMessage);

  }  // END handleError

}
