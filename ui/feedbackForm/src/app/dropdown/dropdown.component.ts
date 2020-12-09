import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  title = 'defaulters';
  @Input() courseList: string[] = ['B.TECH', 'M.TECH', 'PhD'];
  @Input() departmentList: string[] = ['CSE', 'ECE', 'EEE', 'ME'];
  @Input() yearList: number[] = [1, 2, 3, 4];

  @Output() courseChange = new EventEmitter<string>();
  @Output() departmentChange = new EventEmitter<string>();
  @Output() yearChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changeCourse(e: any): void {
    console.log(e.target.value);
    this.courseChange.emit(e.target.value);
  }

  changeDepartment(e: any): void {
    console.log(e.target.value);
    this.departmentChange.emit(e.target.value);
  }

  changeYear(e: any): void{
    console.log(e.target.value);
    this.yearChange.emit(e.target.value);
  }

}
