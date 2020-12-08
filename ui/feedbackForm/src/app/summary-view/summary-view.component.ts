import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.sass']
})
export class SummaryViewComponent implements OnInit {

  items = [
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
    {
      question: "Lorem ipsum dolor sit amet",
      points: 5
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
