import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.sass']
})
export class SideHeaderComponent implements OnInit {

  subject = "Introduction to Transfiguration";
  faculty = "Prof. Minerva McGonagall";
  subjectCode = "TX 101"

  constructor() { }

  ngOnInit(): void {
  }

}
