import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { SideHeaderComponent } from './side-header/side-header.component';
import { FeedbackReportComponent } from './feedback-report/feedback-report.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { DenialPageComponent } from './denial-page/denial-page.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    SideHeaderComponent,
    FeedbackReportComponent,
    LoginPageComponent,
    FormPageComponent,
    DenialPageComponent,
    FacultyLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
