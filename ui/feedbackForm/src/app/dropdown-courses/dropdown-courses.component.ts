import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CoursesData, FacultyData, ResponseData } from '../types';

@Component({
  selector: 'app-dropdown-courses',
  templateUrl: './dropdown-courses.component.html',
  styleUrls: ['./dropdown-courses.component.css']
})
export class DropdownCoursesComponent implements OnInit {

  title = 'defaulters';
  @Input() courseList: string[] = ['B.TECH', 'M.TECH', 'PhD'];
  @Input() departmentList: string[] = ['CSE', 'ECE', 'EEE', 'ME'];
  @Input() yearList: number[] = [1, 2, 3, 4];
  subjectList: CoursesData[] = [];
  facultyList: FacultyData[] = [];

  course = "";
  department = "";
  year = 0;
  subject_code = "";
  selectedSubject: CoursesData| undefined = undefined;
  faculty: FacultyData| undefined = undefined;

  @Output() selectedSubjectChange = new EventEmitter<CoursesData | undefined>();
  @Output() facultyChange = new EventEmitter<FacultyData | undefined>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.course = this.courseList[0];
    this.department = this.departmentList[0];
    this.year = this.yearList[0];
    this.getCoursesAndFaculty();
  }

  changeCourse(e: any): void {
    console.log(e.target.value);
    this.course = e.target.value;
    this.getCoursesAndFaculty();
  }

  changeDepartment(e: any): void {
    console.log(e.target.value);
    this.department = e.target.value;
    this.getCoursesAndFaculty();
  }

  changeYear(e: any): void{
    console.log(e.target.value);
    this.year = e.target.value;
    this.getCoursesAndFaculty();
  }

  changeSubject(e: any): void{
    this.subject_code = e.target.value;
    this.subjectList.forEach( value => {
      if(value.course_id === this.subject_code) {
        this.selectedSubject = value;
      } 
    });
    if(this.selectedSubject !== undefined) {
      this.facultyList= this.selectedSubject.faculty;
      this.faculty = this.facultyList[0];
      this.facultyChange.emit(this.faculty);
    }
    else {
      this.facultyList = [];
    }
    this.selectedSubjectChange.emit(this.selectedSubject);
  }
  
  changeFaculty(e: any): void{
    this.facultyList.forEach( fac => {
      if(e.target.value === fac.fac_name) {
        this.faculty = fac;
      }
    })
    this.facultyChange.emit(this.faculty);
  }

  getCoursesAndFaculty(): void {
    this.subjectList = [];
    this.facultyList = [];
    this.selectedSubject = undefined;
    this.selectedSubjectChange.emit(this.selectedSubject);
    this.faculty = undefined;
    this.facultyChange.emit(this.faculty);
    const baseUrl = window.location.origin;
    this.http.post<ResponseData>(baseUrl + "/api/getCoursesAndFaculty",
    {
      course: this.course,
      department: this.department,
      year: this.year
    }).subscribe(
      (res)=> {
        console.log(res);
        this.subjectList = res.detail;
        if(this.subjectList.length > 0){
          this.selectedSubject = this.subjectList[0];
          this.selectedSubjectChange.emit(this.selectedSubject);
        }
        if(this.subjectList.length > 0 && this.subjectList[0].faculty.length > 0) {
          this.facultyList = this.subjectList[0].faculty;
          this.faculty = this.facultyList[0];
          this.facultyChange.emit(this.faculty);
        }
        else {
          this.facultyList = [];
        }
      },
      (err)=> {
        console.log(err);
      }
    )
  }

}
