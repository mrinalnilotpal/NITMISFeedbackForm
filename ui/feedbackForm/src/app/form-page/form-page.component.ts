import { Component, OnInit, ChangeDetectorRef, AfterContentChecked} from '@angular/core';
import { CourseData, FeedbackData, ResponseData} from '../types';
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';
import * as Cookies from "js-cookie";

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.sass']
})
export class FormPageComponent implements OnInit, AfterContentChecked {

  courseData: CourseData[] = [];
  subject = "sdf";
  faculty = "asdf";
  subjectCode = "sfas";
  facId = "";
  type = "";
  feedback: Array<FeedbackData> = [];
  rating = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  currentIndex = 0;
  totalCourses = 0;
  comments = "";
  modelOpen = false;
  loading = false;
  // tslint:disable-next-line: variable-name
  roll_no = "";
  errorUrl = "/error";
  successUrl = "/success";

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient, private router: Router) { }

  temp(event: any): void {
    console.log(event);
  }

  ngOnInit(): void {
    this.loading = true;
    this.roll_no = Cookies.get("roll_no") as string;
    console.log(this.roll_no);
    if (this.roll_no === ""  || this.roll_no === undefined) {
      this.router.navigateByUrl("/login");
      return;
    }
    this.getData();
  }

  getData(): void {
    const baseUrl = window.location.origin;
    this.http.post<ResponseData>(baseUrl + '/api/checkFeedbackStatus',
      { roll_no: this.roll_no }).subscribe(res => {
        const flag = res.detail;
        if (!flag) {
          this.router.navigateByUrl('/denial');
          return;
        }

        this.http.post<ResponseData>(baseUrl + "/api/viewCourseFaculty",
        { roll_no: this.roll_no}).subscribe(
          res2 => {
          this.courseData = res2.detail;
          if (this.courseData.length < 1) {
            this.router.navigateByUrl(this.errorUrl);
            return;
          }
          this.totalCourses = this.courseData.length;
          this.updateCurrent(0);
          this.loading = false;
        },
        (err) => {
            this.router.navigateByUrl(this.errorUrl);
            return;
        });

    });
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  nextClick(): void {
    console.log(this.rating);
    console.log(this.comments);
    let flag = true;
    for (const rating of this.rating){
      if (rating === 0) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      this.addToFeedback();
      if (this.currentIndex < this.totalCourses - 1) {
        this.currentIndex++;
        this.updateCurrent(this.currentIndex);
      }
    }
    else{
      // this.modelOpen = true;
      alert("Please answer all questions to continue");
    }
  }

  submitClick(): void {
    this.nextClick();
    const baseUrl = window.location.origin;
    this.loading = true;
    this.http.post<ResponseData>(baseUrl + "/api/submitFeedback",
        { roll_no: this.roll_no,
          feedback: this.feedback
        }).subscribe( res => {
          console.log(res);
          this.router.navigateByUrl(this.successUrl);
        },
        (err) => {
            this.router.navigateByUrl(this.errorUrl);
            return;
        });
  }

  updateCurrent(index: number): void {
    this.subject = this.courseData[index].course_name;
    this.faculty = this.courseData[index].fac_name;
    this.facId = this.courseData[index].fac_id;
    this.subjectCode = this.courseData[index].course_id;
    this.type = this.courseData[index].type;
    this.rating = this.getDefaultRating(this.type);
    this.comments = "!!!!!!!!REFRESH STRING!!!!!!!!!!!!!!!";
  }

  getDefaultRating(type: string): number[]{
    if (type === "theory"){
      return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    else {
      return [0, 0, 0, 0, 0];
    }
  }

  addToFeedback(): void{
    const data: FeedbackData = {
      course_id: this.subjectCode,
      fac_id: this.facId,
      comments: this.comments,
      feedback: this.rating,
    };
    this.feedback.push(data);
  }
}
