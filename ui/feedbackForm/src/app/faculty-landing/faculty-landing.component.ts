import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-landing',
  templateUrl: './faculty-landing.component.html',
  styleUrls: ['./faculty-landing.component.sass']
})
export class FacultyLandingComponent implements OnInit {

  values = [
    {
    code: "CS101",
    course: "Basics of Programming with C"
    },
    {
    code: "CS102",
    course: "Basics of Programming with Java"
    },
    {
    code: "CS103",
    course: "Basics of Programming with Python"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
