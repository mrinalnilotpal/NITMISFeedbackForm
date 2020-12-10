import { Component, DoCheck, OnInit} from '@angular/core';
import { CoursesData, DefaulterData, FacultyData, ResponseData } from '../types';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { FeedbackReport } from '../pdfmake-helper/feedback-report';
import { SummaryReport } from "../pdfmake-helper/summary-report";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass']
})
export class AdminDashboardComponent implements OnInit, DoCheck {

  loading = false;
  isSummary = false;
  summaryLabel = "Summary";
  defaulterLabel = "Defaulters";
  defaulter: DefaulterData[] = [];

  courseList: string[] = ['B.TECH', 'M.TECH', 'PhD'];
  departmentList: string[] = ['CSE', 'ECE', 'EEE', 'ME'];
  yearList: number[] = [1, 2, 3, 4];

  course = "";
  year = 0;
  department = "";

  oldCourse = "";
  oldYear = 0;
  oldDepartment = "";

  feedback: string[] = [];

  subject: CoursesData | undefined = undefined;
  faculty: FacultyData | undefined = undefined;


  oldSubject: CoursesData | undefined = undefined;
  oldFaculty: FacultyData | undefined = undefined;


  errorUrl = "/error";

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.course = this.courseList[0];
    this.year = this.yearList[0];
    this.department = this.departmentList[0];

    this.oldCourse = this.course;
    this.oldYear = this.year;
    this.oldDepartment = this.department;
    this.isSummary = false;

    this.getDefaulters();
  }

  ngDoCheck(): void {
    if (this.oldCourse !== this.course) {
      this.oldCourse = this.course;
      this.getDefaulters();
    }
    if (this.oldDepartment !== this.department) {
      this.oldDepartment = this.department;
      this.getDefaulters();
    }
    if (this.oldYear !== this.year) {
      this.oldYear = this.year;
      this.getDefaulters();
    }

    if(this.faculty !== this.oldFaculty){
      this.oldFaculty = this.faculty;
      this.getReport();
    }
    
    if(this.subject !== this.oldSubject){
      this.oldSubject = this.subject;
      console.log(this.subject);
      this.getReport();
    }

  }


  onClick(label: string): void {
    if (label === this.summaryLabel) {
      this.isSummary = true;
    }
    else {
      this.isSummary = false;
    }
  }

  getDefaulters(): void {
    const baseUrl = window.location.origin;
    console.log(this.course + this.department + this.year);
    if (this.course !== "" && this.department !== "" && this.year !== 0) {
      this.loading = true;
      this.http.post<ResponseData>(baseUrl + "/api/defaulter",
      {
        course: this.course,
        department: this.department,
        year: this.year
      }).subscribe(
        res => {
          this.defaulter = res.detail;
          this.loading = false;
        },
        err => {
          this.router.navigateByUrl(this.errorUrl);
          console.log(err);
          this.loading = false;
          return;
        }
      );
    }
  }

  getReport(): void {
    this.feedback = [];
    if(this.faculty != undefined && this.subject != undefined) {
      const baseUrl =  window.location.origin;
      this.loading = true;
      this.http.post<ResponseData>(baseUrl + "/api/feedbackReport",
      { fac_id: this.faculty.fac_id, course_id: this.subject.course_id}).subscribe(
        (res) => {
          this.feedback = res.detail.feedback;
          this.loading = false;
        },
        err => {
          this.router.navigateByUrl(this.errorUrl);
          this.loading = false;
        });
      }
      }
      downloadReport(): void {
        
        if(this.isSummary){
          if(this.feedback.length > 0) {
            const feedbackReport = new FeedbackReport(this.subject!.course_id, this.subject!.course_name, this.faculty!.fac_name, this.feedback);
            feedbackReport.download();
          }
          else {
            alert("No Feedback available");
          }
        }
        else {
          const reportGenerator = new SummaryReport(this.course, this.year.toString(), this.department, this.defaulter);
          reportGenerator.download();
      }
     }
}
