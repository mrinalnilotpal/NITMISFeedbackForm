import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.sass']
})
export class SideHeaderComponent implements OnInit {

  @Input() subject = "Introduction to Transfiguration";
  @Input() faculty = "Prof. Minerva McGonagall";
  @Input() subjectCode = "TX 101";

  constructor() { }

  ngOnInit(): void {
  }

}
