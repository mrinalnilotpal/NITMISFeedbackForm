import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary-header',
  templateUrl: './summary-header.component.html',
  styleUrls: ['./summary-header.component.sass']
})
export class SummaryHeaderComponent implements OnInit {

  @Input() question: string = '';
  @Input() points = "";

  constructor() { }

  ngOnInit(): void {
  }

}
