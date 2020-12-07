import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

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
