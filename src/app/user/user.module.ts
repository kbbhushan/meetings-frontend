import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserslistComponent } from './userslist/userslist.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, UserslistComponent, 
    ForgotPasswordComponent,ResetPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path:'sign-up', component:SignupComponent},
      {path:'userslist', component:UserslistComponent},
      {path:'forgotPassword', component:ForgotPasswordComponent},
      {path:'reset/:userId/:authToken', component:ResetPasswordComponent}
    ])
  ]
})
export class UserModule { }
