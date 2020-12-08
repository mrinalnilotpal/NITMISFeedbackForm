// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators} from '@angular/forms';
//
// @Component({
//   selector: 'app-dropdown',
//   templateUrl: './dropdown.component.html',
//   styleUrls: ['./dropdown.component.css']
// })
// export class DropdownComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//   title = 'defaulters';
//   courseList = ['PhD','M.tech','B.tech']
//   departmentList = ['Computer Sceince & Engineering','Electronics & Communications Enginnering','Electrical & Electronics Engineering','Mechanical Engineering']
//   yearList = [1,2,3,4]
//
//   form_course = new FormGroup({
//     course: new FormControl('', Validators.required)
//   });
//   form_department = new FormGroup({
//     department: new FormControl('', Validators.required)
//   });
//   form_year = new FormGroup({
//     year: new FormControl('', Validators.required)
//   });
//
//   get f(){
//     return this.form_course.controls;
//   }
//   get g(){
//     return this.form_department.controls;
//   }
//   get h(){
//     return this.form_year.controls;
//   }
//
//
//   submit(){
//     console.log(this.form_course.value,this.form_department,this.form_year);
//   }
//   changeCourse(e: { target: { value: any; }; }) {
//     console.log(e.target.value);
//   }
//   changeDepartment(e: { target: { value: any; }; }) {
//     console.log(e.target.value);
//   }
//   changeYear(e: { target: { value: any; }; }) {
//     console.log(e.target.value);
//   }
//
// }
