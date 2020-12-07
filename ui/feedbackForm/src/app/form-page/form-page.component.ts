import { Component, OnInit } from '@angular/core';
import { CourseData } from '../types';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.sass']
})
export class FormPageComponent implements OnInit {

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
  feedback: Array<number[]> = [];
  rating = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  currentIndex = 0;
  totalCourses = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalCourses = this.courseData.length;
    this.updateCurrent(0);
  }

  nextClick(): void {
    console.log(this.rating);
    let flag = true;
    for (const rating of this.rating){
      if (rating === 0) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      this.feedback.push(this.rating);
      if (this.currentIndex < this.totalCourses - 1) {
        this.currentIndex++;
        this.updateCurrent(this.currentIndex);
      }
    }
  }

  updateCurrent(index: number): void {
    this.subject = this.courseData[index].course_name;
    this.faculty = this.courseData[index].fac_name;
    this.facId = this.courseData[index].fac_id;
    this.subjectCode = this.courseData[index].course_id;
    this.type = this.courseData[index].type;
    this.rating = this.getDefaultRating(this.type);
    console.log(this.rating);
  }

  getDefaultRating(type: string): number[]{
    if (type === "theory"){
      return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    else {
      return [0, 0, 0, 0, 0];
    }
  }
}
