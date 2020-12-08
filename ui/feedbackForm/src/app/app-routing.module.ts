import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {FormPageComponent} from "./form-page/form-page.component";
import {FacultyLoginComponent} from "./faculty-login/faculty-login.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {DenialPageComponent} from "./denial-page/denial-page.component";
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import {FacultyLandingComponent} from "./faculty-landing/faculty-landing.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {FacultyDashboardComponent} from "./faculty-dashboard/faculty-dashboard.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'form', component: FormPageComponent },
  { path: 'faculty-login', component: FacultyLoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'denial', component: DenialPageComponent },
  { path: 'success', component: ConfirmationPageComponent },
  { path: 'faculty-landing', component: FacultyLandingComponent},
  { path: 'error', component: ErrorPageComponent},
  { path: 'faculty-dashboard', component: FacultyDashboardComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
