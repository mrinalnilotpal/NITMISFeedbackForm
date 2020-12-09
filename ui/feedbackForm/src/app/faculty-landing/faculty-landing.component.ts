import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';
import * as Cookies from "js-cookie";
import { ResponseData, GetCoursesData} from '../types';

@Component({
  selector: 'app-faculty-landing',
  templateUrl: './faculty-landing.component.html',
  styleUrls: ['./faculty-landing.component.sass']
})
export class FacultyLandingComponent implements OnInit {

  values: GetCoursesData[] = [];

  facId = "";
  errorUrl = "/error";
  loading = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.facId = Cookies.get("fac_id") as string;
    if (this.facId === undefined) {
      this.router.navigateByUrl("/faculty-login");
      this.loading = false;
      return;
    }
    this.getCourses();
  }

  getCourses(): void {
    const baseUrl = window.location.origin;

    this.http.post<ResponseData>(baseUrl + "/api/getCourses",
        { fac_id: this.facId}).subscribe(
          (res: ResponseData) => {
            this.values = res.detail;
            if (this.values.length === 0 ) {
              this.router.navigateByUrl(this.errorUrl);
            }
            this.loading = false;
          }
        );
  }

}
