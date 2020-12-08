import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.sass']
})
export class FacultyDashboardComponent implements OnInit {

  subject = 'Introduction to Mechatronics';
  faculty = 'Guna M';
  subjectCode = 'ME1001';
  label = "Summary";
  constructor() { }

  ngOnInit(): void {
  }

}
