import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTouched();
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  validateRoll(event: Event){
    let validationField = (<HTMLInputElement>event.target).value;
    this.isValid = this.rollRegEx.test(validationField);
    console.log(this.isValid);
  }

  private fetchTouched(){
    this.http.post('http://localhost:4200/api/checkFeedbackStatus.php',
      {"rollno":"cs18b1068"}).subscribe(data => {
      console.log();
    });
  }
}
