import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import * as Cookies from "js-cookie";
import { CourseData, FeedbackData, ResponseData} from '../types';
import { FeedbackReport } from "../pdfmake-helper/feedback-report";

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.sass']
})
export class FacultyDashboardComponent implements OnInit {

  subject = 'Introduction to Mechatronics';
  faculty = 'Guna M';
  feedback: string[] = [];
  courseType = "";
  commentlabel = "Comments";
  summarylabel = "Summary";
  isComments = false;
  courseId = "";
  facId = "";
  loading = true;
  errorUrl = "/error";
  reportGenerator: undefined| FeedbackReport = undefined;
  comments: string[] = ["adsfasdf"];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loading = true;
    this.facId = Cookies.get("fac_id") as string;

    if (this.facId === undefined) {
      this.router.navigateByUrl("/faculty-login");
      return;
    }
    this.route.queryParams.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.courseId = params['course_id'];
      if (this.courseId === undefined) {
        this.router.navigateByUrl(this.errorUrl);
        this.loading = false;
        return;
      }
      this.getData();
    });
  }

  getData(): void {
    const baseUrl =  window.location.origin;
    this.http.post<ResponseData>(baseUrl + "/api/feedbackReport",
        { fac_id: this.facId, course_id: this.courseId}).subscribe(
          (res) => {
            this.faculty = res.detail.fac_name;
            this.subject = res.detail.course_name;
            this.courseType = res.detail.course_type;
            this.feedback = res.detail.feedback;
            this.reportGenerator = new FeedbackReport(this.courseId, this.subject, this.faculty, this.feedback);
            this.http.post<ResponseData>(baseUrl + "/api/feedbackComments",
            {
              course_id: this.courseId,
              fac_id: this.facId,
              course_type: this.courseType
            }).subscribe( res2 => {
              this.comments = res2.detail;
              this.loading = false;
            },
            err => {
              this.router.navigateByUrl(this.errorUrl);
              this.loading = false;
              return;
            });
          },
          err => {
            this.router.navigateByUrl(this.errorUrl);
          });
  }
  onClick(label: string): void {
    if (label === this.commentlabel) {
      this.isComments = true;
    }
    else {
      this.isComments = false;
    }
  }

  downloadReport(): void {
    this.reportGenerator?.download();
  }
}
