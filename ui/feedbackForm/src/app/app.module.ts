import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { SideHeaderComponent } from './side-header/side-header.component';
import { FeedbackReportComponent } from './feedback-report/feedback-report.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    SideHeaderComponent,
    FeedbackReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
