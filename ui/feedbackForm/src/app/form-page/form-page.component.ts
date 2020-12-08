import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { CourseData, FeedbackData } from '../types';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.sass']
})
export class FormPageComponent implements OnInit, AfterContentChecked {

  courseData: CourseData[] = [
    {
        course_id : "CS301",
        course_name: "DATABASE MANAGEMENT SYSTEMS",
        fac_id: "101",
        fac_name: "Dr. Surendiran Balasubramaniam",
        type: "theory"
    },
    {
        course_id: "CS303",
        course_name: "OPERATING SYSTEMS",
        fac_id: "103",
        fac_name: "Dr. Ahilandeswari Thangarajan",
        type: "lab"
    }
  ];

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

  constructor(private cdr: ChangeDetectorRef) { }

  temp(event: any): void {
    console.log(event);
  }

  ngOnInit(): void {
    this.totalCourses = this.courseData.length;
    this.updateCurrent(0);
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
  }

  submitClick(): void {
    this.nextClick();
    console.log(this.feedback);
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
