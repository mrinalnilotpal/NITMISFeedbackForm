import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {FormPageComponent} from "./form-page/form-page.component";
import {FacultyLoginComponent} from "./faculty-login/faculty-login.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'form', component: FormPageComponent },
  { path: 'faculty-login', component: FacultyLoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
