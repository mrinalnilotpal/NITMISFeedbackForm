import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import * as Cookies from "js-cookie";
import {Router} from '@angular/router';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.sass']
})
export class FacultyLoginComponent implements OnInit {

  rollNo = "";
  password = "";
  rollRegEx = /^\d{3}$/gmi;
  isValid = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void{
    console.log(form);
  }

  validateRoll(event: Event): void{
    const validationField = (event.target as HTMLInputElement).value;
    this.isValid = this.rollRegEx.test(validationField);
    console.log(this.isValid);
  }

  login(): void {
    console.log(this.rollNo);
    Cookies.set("fac_id", this.rollNo);
    this.router.navigateByUrl("/faculty-landing");
  }

}
