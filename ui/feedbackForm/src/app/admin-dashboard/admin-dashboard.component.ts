import { Component, OnInit } from '@angular/core';
import { DefaulterData, ResponseData } from '../types';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import * as Cookies from "js-cookie";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass']
})
export class AdminDashboardComponent implements OnInit {

  loading = false;
  isSummary = false;
  summaryLabel = "Summary";
  defaulterLabel = "Defaulters";
  defaulter: DefaulterData[] = [];
  course = "B.TECH";
  year = "3";
  department = "CSE";
  errorUrl = "/error";

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getDefaulters();
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
    if (this.course !== "" && this.department !== "" && this.year !== "") {
      this.loading = true;
      this.http.post<ResponseData>(baseUrl + "/api/defaulter",
      {
        course: this.course,
        department: this.department,
        year: parseInt(this.year, 10)
      }).subscribe(
        res => {
          console.log(res);
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
