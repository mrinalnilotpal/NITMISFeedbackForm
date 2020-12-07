import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.sass']
})
export class AdminLoginComponent implements OnInit {

  rollNo = "";
  password = "";
  rollRegEx = /^\D{15}$/gmi;
  isValid = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  validateRoll(event: Event){
    let validationField = (<HTMLInputElement>event.target).value;
    this.isValid = this.rollRegEx.test(validationField);
    console.log(this.isValid);
  }

}
