import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { SideHeaderComponent } from './side-header/side-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { DenialPageComponent } from './denial-page/denial-page.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from './form/form.component';
import { FacultyLandingComponent} from "./faculty-landing/faculty-landing.component";
import {RedBlackComponent} from "./red-black/red-black.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormFieldComponent } from './form-field/form-field.component';
import { ModalComponent } from './modal/modal.component';
import { LoadingComponent } from './loading/loading.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DefaulterItemComponent } from './defaulter-item/defaulter-item.component';
import { DefaulterViewComponent } from './defaulter-view/defaulter-view.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SummaryItemComponent } from './summary-item/summary-item.component';
import { DropdownComponent} from "./dropdown/dropdown.component";
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { SummaryHeaderComponent } from './summary-header/summary-header.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    SideHeaderComponent,
    LoginPageComponent,
    FormPageComponent,
    DenialPageComponent,
    FacultyLoginComponent,
    AdminLoginComponent,
    FormComponent,
    FacultyLandingComponent,
    RedBlackComponent,
    FormFieldComponent,
    ModalComponent,
    LoadingComponent,
    ErrorPageComponent,
    DefaulterItemComponent,
    DefaulterViewComponent,
    SummaryViewComponent,
    FacultyDashboardComponent,
    AdminDashboardComponent,
    SummaryItemComponent,
    DropdownComponent,
    ToggleButtonComponent,
    DownloadButtonComponent,
    SummaryHeaderComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
