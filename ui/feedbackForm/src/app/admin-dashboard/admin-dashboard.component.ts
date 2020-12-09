import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DefaulterData, ResponseData } from '../types';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import * as Cookies from "js-cookie";
import { reduceEachTrailingCommentRange } from 'typescript';

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
          this.loading = false;
          return;
        }
      );
    }
  }

  downloadReport(): void {
    // this.reportGenerator?.download();
  }

}
