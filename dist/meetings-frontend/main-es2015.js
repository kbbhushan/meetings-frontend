(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n<ng-http-loader></ng-http-loader>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar/calendar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar/calendar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand justify-content-center\" href=\"/\">Calendar</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class =\"nav-link\" style=\"cursor:pointer;float:right\" (click)=\"logout()\"><span class=\"pointer\">Logout</span></a> \n      </li>\n      <li class=\"nav-item\">\n        <a class =\"nav-link\" style=\"cursor:pointer;float:right\" (click)=\"goToUsersList()\" *ngIf=\"isAdmin\">UsersList</a> \n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n<br>\n<div class=\"container\">\n</div>\n<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\n      >\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\"\n       \n      >\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n       \n        (viewDateChange)=\"closeOpenMonthViewDay()\"\n      >\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Month)\"\n        [class.active]=\"view === CalendarView.Month\"\n      >\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Week)\"\n        [class.active]=\"view === CalendarView.Week\"\n      >\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Day)\"\n        [class.active]=\"view === CalendarView.Day\"\n      >\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"CalendarView.Month\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n    [cellTemplate]=\"customCellTemplate\"\n    \n   \n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"CalendarView.Week\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  \n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"CalendarView.Day\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-day-view>\n</div>\n\n<ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n  <div class=\"cal-cell-top\">\n    <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\"\n      >{{ day.badgeTotal }}</span\n    >\n    <span class=\"cal-day-number\"\n      >{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span\n    >\n  </div>\n  <div *ngIf=\"day.badgeTotal > 0\">\n  <div *ngFor=\"let event of day.events\">\n      <small style=\"margin: 2px\">{{event.start | date : 'shortTime'}} {{event.title}}</small>\n  </div></div>\n</ng-template>\n\n\n<ng-template #modalAlert let-meeting=\"meeting\" let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Meeting Remider</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Your meeting - {{meetingTitle}} - is about to start at {{meetingStartTime}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"close();remind=true\">Snooze</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close();remind=false\">Dismiss</button>\n    \n  </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/day/day.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/day/day.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Meetings On {{day}}-{{month}}-{{year}}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  \n</div>\n<div class=\"modal-body\">\n  <div *ngIf=\"meetingsOnThisDay ; else noMeetings\" >\n    <div *ngFor='let meeting of meetingsOnThisDay'>\n     <button class=\"btn btn-outline-dark\" (click)=\"showMeetingDetails(meeting)\" > {{meeting.startTime + ' '}} - {{meeting.endTime}} </button><br>\n     </div>\n    </div><br>\n    <button  class=\"btn btn-primary\" (click)=\"createMeeting()\" *ngIf=\"isAdmin\">Create Meeting</button>\n    <br>\n    <ng-template #noMeetings>\n      <p>\n        There are no meetings on this day.\n      </p>\n    </ng-template>       \n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/meeting-create/meeting-create.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/meeting-create/meeting-create.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #createMeetingForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Please Add meeting details</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label>Meeting Agenda</label>\n        <input type=\"text\" name=\"meetingPurpose\" [(ngModel)]=\"meetingPurpose\" #purpose=\"ngModel\" \n        class=\"form-control\" placeholder=\"Meeting Agenda\" required>\n    </div>\n    <div class=\"form-group\">\n      \n        <div class=\"timediv\">\n        <label class=\"timelabel\">Start Time</label>\n        <input type=\"text\" name=\"meetingStartTime\" [(ngModel)]=\"meetingStartTime\" #startTime=\"ngModel\" \n        class=\"form-control\" placeholder=\"24-hour format Ex-0900\" required>\n        </div><span>-</span>\n        <div class=\"timediv\">\n          <label class=\"timelabel\">End Time</label>\n          <input type=\"text\" name=\"meetingEndTime\" [(ngModel)]=\"meetingEndTime\" #endTime=\"ngModel\" \n          class=\"form-control\" placeholder=\"24-hour format Ex-0930\" required>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Location</label>\n        <input type=\"text\" name=\"meetingLocation\" [(ngModel)]=\"meetingLocation\" #location=\"ngModel\" \n        class=\"form-control\" placeholder=\"Meeting Location\" required>\n    </div>\n    <div class=\"form-group\">\n        <label>Created By</label>\n        <input type=\"text\" name=\"meetingCreatedBy\" [(ngModel)]=\"meetingCreatedBy\" #createdBy=\"ngModel\" \n        class=\"form-control\" placeholder=\"Meeting Created By\" disabled>\n    </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button  class=\"btn btn-outline-success\" (click)=\"onClick()\">Submit</button>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/meeting-edit/meeting-edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/meeting-edit/meeting-edit.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"onSubmit()\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Edit Details</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n       \n        <div class=\"form-group\">\n            <label>Meeting Agenda</label>\n            <input type=\"text\" name=\"meetingPurpose\" [(ngModel)]=\"meeting.purpose\" #purpose=\"ngModel\" \n            class=\"form-control\" placeholder=\"Meeting Purpose\" required>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"timediv\">\n            <label class=\"timelabel\">Start Time</label>\n            <input type=\"text\" name=\"startTime\" [(ngModel)]=\"meeting.startTime\" #startTime=\"ngModel\" \n            class=\"form-control\" placeholder=\"Start Time\" required>\n            \n          </div>\n          <span>--</span>\n          <div class=\"timediv\">\n            <label  class=\"timelabel\">End Time</label>\n            <input type=\"text\" name=\"endTime\" [(ngModel)]=\"meeting.endTime\" #endTime=\"ngModel\" \n            class=\"form-control\" placeholder=\"End Time\" required>\n          </div>\n        </div>\n          <div class=\"form-group\">\n            <label>Location</label>\n            <input type=\"text\" name=\"meetingLocation\" [(ngModel)]=\"meeting.location\" #location=\"ngModel\" \n            class=\"form-control\" placeholder=\"Meeting Location\" required>\n        </div>\n        <div class=\"form-group\">\n            <label>Created By</label>\n            <input type=\"text\" name=\"meetingCreatedBy\" [(ngModel)]=\"meeting.createdBy\" #createdBy=\"ngModel\" \n            class=\"form-control\" placeholder=\"Meeting Created By\" readonly>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button  class=\"btn btn-outline-success\" (click)=\"onClick()\">Submit</button>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.dismiss('Close click')\">Close</button>\n    </div>\n  </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/meeting/meeting.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/meeting/meeting.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{meeting.purpose}}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n</div>\n<div class=\"modal-body\">\n      <div *ngIf=\"meeting\">\n           <p>Date: {{day}}-{{month}}-{{year}}</p>\n            <p>Starts at : {{meeting.startTime}}</p>\n            <p>Ends at: {{meeting.endTime}}</p>\n            <p>Location: {{meeting.location}}</p>\n            <p>Created by {{meeting.createdBy}} on {{meeting.createdOn | date}}</p>\n\n      </div>      \n</div>\n<div class=\"modal-footer\">\n      <button  class=\"btn btn-primary\" (click)=\"editThisMeeting()\" *ngIf=\"isAdmin\">Edit</button>\n      <button  class=\"btn btn-danger\" (click)=\"deleteThisMeeting(meeting)\" *ngIf=\"isAdmin\">Delete</button>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n    <a class=\"navbar-brand\" href=\"/\">Calendar</a>\n  \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  \n      <span class=\"navbar-toggler-icon\"></span>\n  \n    </button>\n  \n  \n  </nav>\n  \n  <div class=\"row p-0 m-0\">\n  \n    <div class=\"col-sm\"></div>\n  \n    <div class=\"col-sm p-5\">\n  \n      <h2 class=\"form-signin-heading\">Please Enter UserName</h2>\n  \n      <label for=\"inputuserName\" class=\"sr-only\">Email</label>\n  \n      <input type=\"text\" id=\"inputuserName\" class=\"form-control\" [(ngModel)]=\"userName\" placeholder=\"UserName\" required autofocus>\n  \n      <br>\n\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"sendPasswordLink()\">Submit</button>\n      \n    </div>\n  \n    <div class=\"col-sm\"></div>\n  \n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n    <a class=\"navbar-brand\" href=\"/\">Calendar</a>\n  \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  \n      <span class=\"navbar-toggler-icon\"></span>\n  \n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n  \n      <ul class=\"navbar-nav\">\n  \n        <li class=\"nav-item\">\n  \n          <a class=\"pointer nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n  \n        </li>\n  \n      </ul>\n  \n    </div>\n  \n  </nav>\n  \n  <div class=\"row p-0 m-0\">\n  \n    <div class=\"col-sm\"></div>\n  \n    <div class=\"col-sm p-5\">\n  \n      <h2 class=\"form-signin-heading\">Please sign in</h2>\n  \n      <label for=\"inputUserName\" class=\"sr-only\">UserName</label>\n  \n      <input type=\"text\" id=\"inputUserName\" class=\"form-control\" [(ngModel)]=\"userName\" placeholder=\"UserName\" required autofocus>\n  \n      <br>\n  \n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  \n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n  \n      <br>\n  \n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n      <br>\n      <span class=\"pointer\" (click)=\"forgotPassword()\">Forgot Password</span>\n    </div>\n  \n    <div class=\"col-sm\"></div>\n  \n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/reset-password/reset-password.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/reset-password/reset-password.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row p-0 m-0\">\n  \n    <div class=\"col-sm\"></div>\n  \n    <div class=\"col-sm p-5\">\n  \n      <h2 class=\"form-signin-heading\">Create New Password</h2>\n      <label for=\"inputNewPassword\" class=\"sr-only\">Old Password</label>\n  \n      <input type=\"password\" id=\"inputNewPassword\" class=\"form-control\" [(ngModel)]=\"newPassword\" placeholder=\"New Password\" required autofocus>\n  \n      <br>\n  \n      <label for=\"inputConfirmPassword\" class=\"sr-only\">Confirm Password</label>\n  \n      <input type=\"password\" id=\"inputConfirmPassword\" class=\"form-control\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confirm Password\" required>\n  \n      <br>\n  \n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"createPassword()\">Submit</button>\n</div>\n  \n    <div class=\"col-sm\"></div>\n  \n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"/\">Calendar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n       aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"goToSignIn()\">Sign-In</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<div class=\"row p-0 m-0\">\n    <div class=\"col-sm\"></div>\n    <div class=\"col-sm p-5\">\n        <h2 class=\"form-signin-heading\">Sign Up</h2>\n        <br>\n        <span>UserName: </span>\n        <label for=\"inputUserName\" class=\"sr-only\">UserName</label>\n        <input type=\"text\" id=\"inputUserName\" class=\"form-control\" [(ngModel)]=\"userName\" placeholder=\"UserName\"\n            required autofocus>\n        <br>\n        <span>FirstName: </span>\n        <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n        <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\"\n            required autofocus>\n        <br>\n        <span>LastName: </span>\n        <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n        <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\"\n            required>\n        <br>\n        <span>Mobile: </span>\n        <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n        <input type=\"number\" id=\"inputMobile\" class=\"form-control\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" required>\n        <br>\n        <span>Email: </span>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\"\n            required>\n        <br>\n        <span>Password: </span>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"\n           required>\n        <br>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n    </div>\n    <div class=\"col-sm\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/userslist/userslist.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/userslist/userslist.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"#\">Calendar</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n      \n      <li class=\"nav-item\">\n        <a class =\"nav-link \" style=\"float:right\" (click)=\"logout()\">Logout</a> \n      </li>\n      <li class=\"nav-item\">\n        <a class =\"nav-link\" style=\"float:right\" (click)=\"goToCalendarView()\">Go To Calendar</a> \n      </li>\n  </ul>\n\n  </div>\n\n</nav>\n<br>\n<div class=\"container\" >\n    <div class=\"row\" style=\"text-align:center\">\n      <div class=\"col-md-12\" style=\"font-size:22px\"> Users List </div>\n      <br><br><br><br>\n    </div>\n    <div  class=\"users\" *ngIf=\"userslist ; else noUsers\">\n        <div *ngFor=\"let user of userslist\" >\n                  <br>\n                 <button class=\"btn btn-primary\" (click)= \"goToCalendarView()\">{{user}}</button>\n           \n        </div>\n    </div>\n    <ng-template #noUsers>\n      <p>\n        There are no Users.\n      </p>\n    </ng-template>\n</div>  \n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");




const routes = [
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], pathMatch: 'full' },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'meetings-frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar/calendar.module */ "./src/app/calendar/calendar.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm2015/ng-http-loader.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModule"].forRoot({ provide: angular_calendar__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"], useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_12__["adapterFactory"] }),
            _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
            _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_6__["MyCalendarModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_http_loader__WEBPACK_IMPORTED_MODULE_13__["NgHttpLoaderModule"].forRoot()
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let AppService = class AppService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
        this.getUserInfoFromLocalstorage = () => {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = (data) => {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    } // end constructor  
    signupFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('userName', data.userName)
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobile', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(`${this.url}/api/v1/users/signup`, params);
    } // end of signupFunction function.
    signinFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('userName', data.userName)
            .set('password', data.password);
        return this.http.post(`${this.url}/api/v1/users/login`, params);
    } // end of signinFunction function.
    getUserslist() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'authToken': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken')
            })
        };
        return this.http.get(`${this.url}/api/v1/users/userslist`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    } // end of getUserslist function.
    getMeetingsInAMonth(data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'authToken': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken')
            })
        };
        return this.http.get(`${this.url}/api/v1/meetings/month/` + data.month, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    } // end of getMeetingsInAMonth function.
    getMeetingsOnADay(data) {
        /* authToken can also be added to data as in other functions.
        It is here just added to see about httpOptions. This throwed CORS error.
        So, also modified routeLogger.js in backend middlewares to allow authToken in http headers.*/
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'authToken': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken')
            })
        };
        return this.http.get(`${this.url}/api/v1/meetings/day/` + data.day, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    } // end of getMeetingsInAMonth function.
    editMeeting(data) {
        data['authToken'] = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        console.log('data is edit Meeting', data);
        return this.http.put(`${this.url}/api/v1/meetings/edit/` + data.meetingId, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    deleteMeeting(data) {
        data['authToken'] = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        return this.http.post(`${this.url}/api/v1/meetings/delete/` + data.meetingId, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    createMeeting(data) {
        data['authToken'] = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        return this.http.post(`${this.url}/api/v1/meetings/create`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    logout() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken'));
        return this.http.post(`${this.url}/api/v1/users/logout`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    } // end logout function
    resetPassword(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('userName', data.userName);
        return this.http.post(`${this.url}/api/v1/users/password-reset`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    } // end reset Password function
    updatePassword(data) {
        return this.http.post(`${this.url}/api/v1/users/updatePassword`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    } // end update password function
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        } // end condition *if
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    } // END handleError
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: MyCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCalendarModule", function() { return MyCalendarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar/calendar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _day_day_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./day/day.component */ "./src/app/calendar/day/day.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _meeting_meeting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./meeting/meeting.component */ "./src/app/calendar/meeting/meeting.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _meeting_edit_meeting_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./meeting-edit/meeting-edit.component */ "./src/app/calendar/meeting-edit/meeting-edit.component.ts");
/* harmony import */ var _meeting_create_meeting_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./meeting-create/meeting-create.component */ "./src/app/calendar/meeting-create/meeting-create.component.ts");
















let MyCalendarModule = class MyCalendarModule {
};
MyCalendarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                { path: 'calendar', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"] },
                { path: 'day/:day', component: _day_day_component__WEBPACK_IMPORTED_MODULE_7__["DayComponent"] }
            ]),
            angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__["adapterFactory"]
            })
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        declarations: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"], _day_day_component__WEBPACK_IMPORTED_MODULE_7__["DayComponent"], _meeting_meeting_component__WEBPACK_IMPORTED_MODULE_11__["MeetingComponent"], _meeting_edit_meeting_edit_component__WEBPACK_IMPORTED_MODULE_13__["MeetingEditComponent"], _meeting_create_meeting_create_component__WEBPACK_IMPORTED_MODULE_14__["MeetingCreateComponent"]],
        entryComponents: [_day_day_component__WEBPACK_IMPORTED_MODULE_7__["DayComponent"], _meeting_meeting_component__WEBPACK_IMPORTED_MODULE_11__["MeetingComponent"], _meeting_edit_meeting_edit_component__WEBPACK_IMPORTED_MODULE_13__["MeetingEditComponent"], _meeting_create_meeting_create_component__WEBPACK_IMPORTED_MODULE_14__["MeetingCreateComponent"]]
    })
], MyCalendarModule);



/***/ }),

/***/ "./src/app/calendar/calendar/calendar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/calendar/calendar/calendar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/calendar/calendar/calendar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/calendar/calendar/calendar.component.ts ***!
  \*********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _day_day_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../day/day.component */ "./src/app/calendar/day/day.component.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_11__);













const colors = {
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
let CalendarComponent = class CalendarComponent {
    constructor(modalService, datePipe, router, appService, SocketService, toastr, vcr) {
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.router = router;
        this.appService = appService;
        this.SocketService = SocketService;
        this.toastr = toastr;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.meetingsInThisMonth = [];
        this.events = [];
        this.activeDayIsOpen = false;
        this.remind = true;
        this.getMeetingsInThisMonth = () => {
            let year = this.datePipe.transform(this.viewDate, 'yyyy');
            let month = this.datePipe.transform(this.viewDate, 'MM');
            this.appService.getMeetingsInAMonth({ month: year + month }).subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                    this.meetingsInThisMonth = apiResponse.data;
                    // console.log(this.meetingsInThisMonth);
                    this.loadEvents();
                }
                else {
                    console.log('Error Occurred');
                }
            });
        }; ///end of getMeetingsInThisMonth
        this.loadEvents = () => {
            this.events = [];
            if (this.meetingsInThisMonth != null && this.meetingsInThisMonth.length > 0) {
                this.meetingsInThisMonth.forEach((meeting) => {
                    let starthours = meeting.startTime.toString().substring(0, 2);
                    let startMins = meeting.startTime.toString().substring(2);
                    let endhours = meeting.endTime.toString().substring(0, 2);
                    let endMins = meeting.endTime.toString().substring(2);
                    this.events.push({
                        "title": meeting.purpose,
                        "start": new Date(meeting.meetingDay.substring(0, 4), //year
                        meeting.meetingDay.substring(4, 6) - 1, //month starts at 0
                        meeting.meetingDay.substring(6), //day
                        starthours, startMins),
                        "end": new Date(meeting.meetingDay.substring(0, 4), //year
                        meeting.meetingDay.substring(4, 6) - 1, //month starts at 0
                        meeting.meetingDay.substring(6), //day
                        endhours, endMins),
                        "color": colors.yellow,
                    });
                }); //end of meetingsInThisMonth
            } //end of if
            this.refresh.next();
            //console.log(this.events);
        };
        this.checkStatus = () => {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_11__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_11__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_11__["Cookie"].get('authtoken') === null) {
                this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        this.verifyUserConfirmation = () => {
            this.SocketService.verifyUser()
                .subscribe((data) => {
                // this.disconnectedSocket = false;
                this.SocketService.setUser(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_11__["Cookie"].get('authtoken'));
            });
        };
        this.getMeetingUpdates = () => {
            this.SocketService.getMeetingUpdates()
                .subscribe((data) => {
                this.toastr.info(data);
                this.refresh.next();
            });
        };
        this.goToUsersList = () => {
            this.router.navigate(['/userslist']);
        };
        this.meetingReminder = () => {
            for (let meeting of this.events) {
                if (meeting.start.getTime() > new Date().getTime() &&
                    meeting.start.getTime() - new Date().getTime() < 70000 && this.remind) {
                    this.meetingTitle = meeting.title;
                    this.meetingStartTime = this.datePipe.transform(meeting.start, 'shortTime');
                    this.modalService.open(this.modalAlert, { size: 'sm' });
                } //end if
            } //end for
        };
        this.logout = () => {
            this.appService.logout().subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                    localStorage.clear();
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_11__["Cookie"].deleteAll();
                    this.SocketService.exitSocket();
                    this.router.navigate(['/login']);
                }
                else {
                    this.toastr.error('Error Occurred');
                }
            }, (error) => { this.toastr.error('Some error occurred'); }); //end of subscribe
        }; //  end of logout
    }
    ngOnInit() {
        this.isAdmin = /.*-admin$/.test(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_11__["Cookie"].get('userName'));
        this.checkStatus();
        this.verifyUserConfirmation();
        this.getMeetingUpdates();
        this.getMeetingsInThisMonth();
        setInterval(() => { this.meetingReminder(); }, 5000);
    }
    dayClicked({ date, events }) {
        this.dateClicked = date;
        const modalRef = this.modalService.open(_day_day_component__WEBPACK_IMPORTED_MODULE_9__["DayComponent"]);
        modalRef.componentInstance.date = date;
        modalRef.result.then((result) => {
            this.getMeetingsInThisMonth();
        }, (reason) => { console.log('console msg from showMeetingDetails', reason); });
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        this.events = this.events.map(iEvent => {
            if (iEvent === event) {
                return Object.assign({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modalService.open(this.modalContent, { size: 'lg' });
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
        this.getMeetingsInThisMonth();
    }
};
CalendarComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_10__["SocketService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalAlert', { static: true })
], CalendarComponent.prototype, "modalAlert", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], CalendarComponent.prototype, "modalContent", void 0);
CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar/calendar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar/calendar.component.css")).default]
    })
], CalendarComponent);



/***/ }),

/***/ "./src/app/calendar/day/day.component.css":
/*!************************************************!*\
  !*** ./src/app/calendar/day/day.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2RheS9kYXkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/calendar/day/day.component.ts":
/*!***********************************************!*\
  !*** ./src/app/calendar/day/day.component.ts ***!
  \***********************************************/
/*! exports provided: DayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayComponent", function() { return DayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _meeting_meeting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../meeting/meeting.component */ "./src/app/calendar/meeting/meeting.component.ts");
/* harmony import */ var _meeting_create_meeting_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../meeting-create/meeting-create.component */ "./src/app/calendar/meeting-create/meeting-create.component.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__);









let DayComponent = class DayComponent {
    constructor(_route, router, datePipe, appService, modalService, activeModal) {
        this._route = _route;
        this.router = router;
        this.datePipe = datePipe;
        this.appService = appService;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.meetingsOnThisDay = [];
    }
    ngOnInit() {
        this.getMeeetingsOnThisDay();
        this.isAdmin = /.*-admin$/.test(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('userName'));
    }
    getMeeetingsOnThisDay() {
        this.year = this.datePipe.transform(this.date, 'yyyy');
        this.month = this.datePipe.transform(this.date, 'MM');
        this.day = this.datePipe.transform(this.date, 'dd');
        this.dayId = this.year + '' + this.month + '' + this.day;
        console.log('In getMeetingsOnThisDay function', this.dayId);
        this.appService.getMeetingsOnADay({ day: this.dayId }).subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
                console.log(apiResponse.data);
                this.meetingsOnThisDay = apiResponse.data;
            }
            else {
                console.log('Error Occurred');
            }
        });
    }
    showMeetingDetails(meeting) {
        const modalRef = this.modalService.open(_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_6__["MeetingComponent"], { size: 'lg' });
        modalRef.componentInstance.meetingsOnThisDay = this.meetingsOnThisDay;
        modalRef.componentInstance.meeting = meeting;
        modalRef.componentInstance.date = this.date;
        modalRef.result.then((result) => {
            this.getMeeetingsOnThisDay();
        }, (reason) => { console.log('console msg from showMeetingDetails', reason); });
    }
    createMeeting() {
        console.log('Create Meeting called');
        const modalRef = this.modalService.open(_meeting_create_meeting_create_component__WEBPACK_IMPORTED_MODULE_7__["MeetingCreateComponent"], { size: 'lg' });
        modalRef.componentInstance.date = this.date;
        modalRef.result.then((result) => {
            this.getMeeetingsOnThisDay();
        }, (reason) => { console.log('console msg from showMeetingDetails', reason); });
    }
};
DayComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayComponent.prototype, "date", void 0);
DayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-day',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./day.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/day/day.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./day.component.css */ "./src/app/calendar/day/day.component.css")).default]
    })
], DayComponent);



/***/ }),

/***/ "./src/app/calendar/meeting-create/meeting-create.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/calendar/meeting-create/meeting-create.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".timediv {\n    display: inline-block;\n}\n\n.timelabel {\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvbWVldGluZy1jcmVhdGUvbWVldGluZy1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jYWxlbmRhci9tZWV0aW5nLWNyZWF0ZS9tZWV0aW5nLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRpbWVsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/calendar/meeting-create/meeting-create.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/calendar/meeting-create/meeting-create.component.ts ***!
  \*********************************************************************/
/*! exports provided: MeetingCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingCreateComponent", function() { return MeetingCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");








let MeetingCreateComponent = class MeetingCreateComponent {
    constructor(appService, modalService, activeModal, datePipe, toastr, router, socketService) {
        this.appService = appService;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.datePipe = datePipe;
        this.toastr = toastr;
        this.router = router;
        this.socketService = socketService;
    }
    ngOnInit() {
        if (this.date.getDate() < new Date().getDate()) {
            this.toastr.error('Cannot create back dated meetings.');
            this.activeModal.dismiss();
        }
        this.meetingDay = this.datePipe.transform(this.date, 'yyyy') + '' +
            this.datePipe.transform(this.date, 'MM') + '' +
            this.datePipe.transform(this.date, 'dd');
        this.userInfo = this.appService.getUserInfoFromLocalstorage();
        this.meetingCreatedBy = this.userInfo.firstName + ' ' + this.userInfo.lastName;
    }
    onClick() {
        console.log("Submit button was clicked!");
    }
    onSubmit() {
        if (!this.meetingPurpose) {
            this.toastr.warning('Enter meeting agenda');
        }
        else if (!this.meetingStartTime) {
            this.toastr.warning('Enter meeting start time');
        }
        else if (!this.meetingEndTime) {
            this.toastr.warning('Enter meeting end time');
        }
        else if (!this.meetingLocation) {
            this.toastr.warning('Enter meeting location');
        }
        else if (!(/[0-1][0-9][0-5][0-9]|[2][0-3][0-5][0-9]/.test(this.meetingStartTime))) {
            this.toastr.warning('Start time is not valid');
        }
        else if (!(/[0-1][0-9][0-5][0-9]|[2][0-3][0-5][0-9]/.test(this.meetingEndTime))) {
            this.toastr.warning('End time is not valid');
        }
        else if (this.meetingStartTime > this.meetingEndTime) {
            this.toastr.warning('End time should be after start time');
        }
        else {
            let meeting = {
                meetingDay: this.meetingDay,
                startTime: this.meetingStartTime,
                endTime: this.meetingEndTime,
                where: this.meetingLocation,
                purpose: this.meetingPurpose,
                createdBy: this.meetingCreatedBy
            };
            this.appService.createMeeting(meeting).subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                    console.log(apiResponse.data);
                    this.toastr.success('Meeting Created Successfully!');
                    this.socketService.sendMeetingUpdates('A new meeting is created.');
                }
                else {
                    this.toastr.error('Error Occurred!');
                    console.log('Error Occurred');
                }
            }, (error) => { this.toastr.error('Error Occurred!'); });
            this.activeModal.close();
        }
    }
};
MeetingCreateComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MeetingCreateComponent.prototype, "date", void 0);
MeetingCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meeting-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meeting-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/meeting-create/meeting-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meeting-create.component.css */ "./src/app/calendar/meeting-create/meeting-create.component.css")).default]
    })
], MeetingCreateComponent);



/***/ }),

/***/ "./src/app/calendar/meeting-edit/meeting-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/calendar/meeting-edit/meeting-edit.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".timediv {\n    display: inline-block;\n}\n\n.timelabel {\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvbWVldGluZy1lZGl0L21lZXRpbmctZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL21lZXRpbmctZWRpdC9tZWV0aW5nLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50aW1lbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/calendar/meeting-edit/meeting-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/calendar/meeting-edit/meeting-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: MeetingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingEditComponent", function() { return MeetingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let MeetingEditComponent = class MeetingEditComponent {
    constructor(appService, modalService, activeModal) {
        this.appService = appService;
        this.modalService = modalService;
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    onClick() {
        console.log("Submit button was clicked!");
        this.activeModal.close(this.meeting);
    }
    onSubmit() {
        console.log("Form was submitted!");
        this.activeModal.close(this.meeting);
    }
};
MeetingEditComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MeetingEditComponent.prototype, "meeting", void 0);
MeetingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meeting-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meeting-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/meeting-edit/meeting-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meeting-edit.component.css */ "./src/app/calendar/meeting-edit/meeting-edit.component.css")).default]
    })
], MeetingEditComponent);



/***/ }),

/***/ "./src/app/calendar/meeting/meeting.component.css":
/*!********************************************************!*\
  !*** ./src/app/calendar/meeting/meeting.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL21lZXRpbmcvbWVldGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/calendar/meeting/meeting.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/calendar/meeting/meeting.component.ts ***!
  \*******************************************************/
/*! exports provided: MeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingComponent", function() { return MeetingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _meeting_edit_meeting_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../meeting-edit/meeting-edit.component */ "./src/app/calendar/meeting-edit/meeting-edit.component.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");









let MeetingComponent = class MeetingComponent {
    constructor(datePipe, appService, modalService, activeModal, toastr, socketService) {
        this.datePipe = datePipe;
        this.appService = appService;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.toastr = toastr;
        this.socketService = socketService;
    }
    ngOnInit() {
        this.isAdmin = /.*-admin$/.test(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userName'));
        this.year = this.datePipe.transform(this.date, 'yyyy');
        this.month = this.datePipe.transform(this.date, 'MM');
        this.day = this.datePipe.transform(this.date, 'dd');
    }
    editThisMeeting() {
        const modalRef = this.modalService.open(_meeting_edit_meeting_edit_component__WEBPACK_IMPORTED_MODULE_5__["MeetingEditComponent"], { size: 'lg' });
        modalRef.componentInstance.meeting = this.meeting;
        modalRef.componentInstance.date = this.date;
        modalRef.result.then((result) => {
            if (result) {
                if (!result.purpose) {
                    this.toastr.warning('Meeting Agenda cannot be null');
                }
                else if (!result.startTime) {
                    this.toastr.warning('start time cannot be null');
                }
                else if (!result.endTime) {
                    this.toastr.warning('end time cannot be null');
                }
                else if (!result.location) {
                    this.toastr.warning('Enter meeting location');
                }
                else if (!(/[0-1][0-9][0-5][0-9]|[2][0-3][0-5][0-9]/.test(result.startTime))) {
                    this.toastr.warning('Start time is not valid');
                }
                else if (!(/[0-1][0-9][0-5][0-9]|[2][0-3][0-5][0-9]/.test(result.endTime))) {
                    this.toastr.warning('End time is not valid');
                }
                else if (result.startTime > result.endTime) {
                    this.toastr.warning('End time should be after start time');
                }
                else {
                    this.editMeeting(result);
                    console.log(result);
                    this.activeModal.close();
                }
            }
        }, (reason) => { console.log('console msg from showMeetingDetails', reason); });
    }
    editMeeting(data) {
        console.log("I came here");
        this.appService.editMeeting(data).subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
                console.log(apiResponse.data);
                console.log('update successful');
                this.toastr.success('Meeting Edited Successfully!');
                this.socketService.sendMeetingUpdates('A meeting is Updated.');
            }
            else {
                console.log('Error Occurred');
            }
        }, (error) => { this.toastr.error('Error Occurred!'); });
    }
    deleteThisMeeting(data) {
        this.appService.deleteMeeting(data).subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
                console.log(apiResponse.data);
                console.log('Delete successful');
                this.toastr.success('Delete Successfull!');
                this.socketService.sendMeetingUpdates('A meeting is deleted.');
                this.activeModal.close();
            }
            else {
                console.log('Error Occurred');
            }
        }, (error) => { this.toastr.error('Error Occurred!'); });
    }
};
MeetingComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MeetingComponent.prototype, "meetingOnThisDay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MeetingComponent.prototype, "meeting", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MeetingComponent.prototype, "date", void 0);
MeetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meeting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meeting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/meeting/meeting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meeting.component.css */ "./src/app/calendar/meeting/meeting.component.css")).default]
    })
], MeetingComponent);



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let SocketService = class SocketService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
        // events to be listened 
        this.verifyUser = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on('verifyUser', (data) => {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end verifyUser
        this.authError = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on('auth-error', (data) => {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end authError
        this.onlineUserList = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on("online-user-list", (userList) => {
                    observer.next(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        /**
         * This function will receive the updates about meetings.
         */
        this.getMeetingUpdates = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on("meetingupdate", (data) => {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end getMeetingUpdates
        this.disconnectedSocket = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on("disconnect", () => {
                    observer.next();
                }); // end Socket
            }); // end Observable
        }; // end disconnectSocket
        // events to be emitted
        /**
         * When a meeting is created, updated or deleted, this event is emitted.
         */
        this.sendMeetingUpdates = (data) => {
            this.socket.emit("meetingupdate", (data)); // end Socket
        }; // end sendMeedtingUpdates
        this.setUser = (authToken) => {
            this.socket.emit("set-user", authToken);
        }; // end setUser
        this.exitSocket = () => {
            this.socket.disconnect();
        }; // end exit socket
        // connection is being created.
        // that handshake
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMessage);
    } // END handleError
};
SocketService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketService);



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(appService, router, toastr) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.sendPasswordLink = () => {
            console.log('check email for password link');
            let data = {
                userName: this.userName
            };
            this.appService.resetPassword(data).subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                    this.toastr.info('Password link sent to Email.');
                    this.router.navigate(['/login']);
                }
                else {
                    this.toastr.error('Some Error Occurred');
                }
            }, (error) => { this.toastr.error('Some Error Occurred'); }); //end of subscribe
        };
    }
    ngOnInit() {
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pointer {\n    cursor: pointer\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let LoginComponent = class LoginComponent {
    constructor(appService, router, toastr, vcr) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignUp = () => {
            this.router.navigate(['/sign-up']);
        }; // end goToSignUp
        this.signinFunction = () => {
            if (!this.userName) {
                this.toastr.warning('enter email');
            }
            else if (!this.password) {
                this.toastr.warning('enter password');
            }
            else {
                let data = {
                    userName: this.userName,
                    password: this.password
                };
                this.appService.signinFunction(data)
                    .subscribe((apiResponse) => {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('userName', apiResponse.data.userDetails.userName);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        if (/.*-admin/.test(apiResponse.data.userDetails.userName)) {
                            this.router.navigate(['/userslist']);
                        }
                        else {
                            this.router.navigate(['/calendar']);
                        }
                    }
                    else {
                        this.toastr.error(apiResponse.message);
                    }
                }, (err) => {
                    this.toastr.error(err);
                });
            } // end condition
        }; // end signinFunction
        this.forgotPassword = () => {
            this.router.navigate(['/forgotPassword']);
        };
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");





let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(toastr, _route, router, appService) {
        this.toastr = toastr;
        this._route = _route;
        this.router = router;
        this.appService = appService;
        this.createPassword = () => {
            if (this.newPassword !== this.confirmPassword) {
                this.toastr.warning('Passwords do not match.');
            }
            else {
                let data = {
                    userId: this.userId,
                    authToken: this.authToken,
                    password: this.newPassword
                };
                this.appService.updatePassword(data).subscribe((apiResponse) => {
                    if (apiResponse.status === 200) {
                        this.toastr.success('Password Updated Successfully.');
                        this.router.navigate(['/login']);
                    }
                    else {
                        this.toastr.error('Error while updating password');
                    }
                }, (error) => {
                    this.toastr.error('Error while updating password');
                }); //end of subscribe
            }
        };
    }
    ngOnInit() {
        this.userId = this._route.snapshot.paramMap.get('userId');
        this.authToken = this._route.snapshot.paramMap.get('authToken');
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")).default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let SignupComponent = class SignupComponent {
    constructor(appService, router, toastr, vcr) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignIn = () => {
            this.router.navigate(['/']);
        }; // end goToSignIn
        this.signupFunction = () => {
            if (!this.userName) {
                this.toastr.warning('enter user name');
            }
            else if (!this.firstName) {
                this.toastr.warning('enter first name');
            }
            else if (!this.lastName) {
                this.toastr.warning('enter last name');
            }
            else if (!this.mobile) {
                this.toastr.warning('enter mobile');
            }
            else if (!this.email) {
                this.toastr.warning('enter email');
            }
            else if (!this.password) {
                this.toastr.warning('enter password');
            }
            else {
                let data = {
                    userName: this.userName,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    mobileNumber: this.mobile,
                    email: this.email,
                    password: this.password,
                };
                console.log(data);
                this.appService.signupFunction(data)
                    .subscribe((apiResponse) => {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        this.toastr.success('Signup successful');
                        setTimeout(() => {
                            this.goToSignIn();
                        }, 2000);
                    }
                    else {
                        this.toastr.error(apiResponse.message);
                    }
                }, (err) => {
                    this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signupFunction
    }
    ngOnInit() {
    }
};
SignupComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _userslist_userslist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userslist/userslist.component */ "./src/app/user/userslist/userslist.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");












let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _userslist_userslist_component__WEBPACK_IMPORTED_MODULE_9__["UserslistComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
                { path: 'userslist', component: _userslist_userslist_component__WEBPACK_IMPORTED_MODULE_9__["UserslistComponent"] },
                { path: 'forgotPassword', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordComponent"] },
                { path: 'reset/:userId/:authToken', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"] }
            ])
        ]
    })
], UserModule);



/***/ }),

/***/ "./src/app/user/userslist/userslist.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/userslist/userslist.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".users {\n    margin: 0 0 5px 0;\n    padding: 10px;\n   \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2Vyc2xpc3QvdXNlcnNsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTs7RUFFZiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlcnNsaXN0L3VzZXJzbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzIHtcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/user/userslist/userslist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/userslist/userslist.component.ts ***!
  \*******************************************************/
/*! exports provided: UserslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserslistComponent", function() { return UserslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);






let UserslistComponent = class UserslistComponent {
    constructor(appService, router, toastr) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.userslist = [];
        this.goToCalendarView = () => {
            this.router.navigate(['/calendar']);
        };
        this.logout = () => {
            this.appService.logout().subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                    this.router.navigate(['/login']);
                }
                else {
                    this.toastr.error('Error Occurred');
                }
            }, (error) => { this.toastr.error('Some error occurred'); }); //end of subscribe
        }; //  end of logout
    }
    ngOnInit() {
        this.isAdmin = /.*-admin$/.test(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName'));
        this.appService.getUserslist().subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
                console.log(apiResponse.data);
                console.log('cookie', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName'));
                for (let user of apiResponse.data) {
                    console.log(user["userName"]);
                    if (user["userName"] != ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')) {
                        this.userslist.push(user["firstName"] + ' ' + user["lastName"]);
                    }
                }
                console.log(this.userslist);
            }
            else {
                this.toastr.error(apiResponse.message);
            }
        }, //end of apiResonse
        (error) => {
            this.toastr.error(error);
        }); //end of subscribe
    }
};
UserslistComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
UserslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userslist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userslist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/userslist/userslist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userslist.component.css */ "./src/app/user/userslist/userslist.component.css")).default]
    })
], UserslistComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bharath/Documents/edwisor/project1/meetings-frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map