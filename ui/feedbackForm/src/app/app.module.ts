import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { SideHeaderComponent } from './side-header/side-header.component';
import { FeedbackReportComponent } from './feedback-report/feedback-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { DenialPageComponent } from './denial-page/denial-page.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from './form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormFieldComponent } from './form-field/form-field.component';
import { ModalComponent } from './modal/modal.component';
import { LoadingComponent } from './loading/loading.component';

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
    AdminLoginComponent,
    FormComponent,
    FormFieldComponent,
    ModalComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
