import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import * as Cookies from "js-cookie";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  rollNo = "";
  password = "";
  rollRegEx = /^(cs|me|ce|ee|ec)(\d\d)(b|m)(\d{4})$/gmi;
  isValid = true;
  isStudent = true;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void{
    console.log(form);
  }

  validateRoll(event: Event): void{
    const validationField = (<HTMLInputElement>event.target).value;
    this.isValid = this.rollRegEx.test(validationField);
  }

  login(): void {
    console.log(this.rollNo);
    Cookies.set("roll_no", this.rollNo);
    this.router.navigateByUrl("/form");
  }
}
