import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaulter-view',
  templateUrl: './defaulter-view.component.html',
  styleUrls: ['./defaulter-view.component.sass']
})
export class DefaulterViewComponent implements OnInit {

  defaulters = [
    {
      rollNo: "CS18B1020",
      name: "Ramar Seetha Dhayanithi"
    },
    {
      rollNo: "CS18B1020",
      name: "Ramar Seetha Dhayanithi"
    },
    {
      rollNo: "CS18B1020",
      name: "Ramar Seetha Dhayanithi"
    },
    {
      rollNo: "CS18B1020",
      name: "Ramar Seetha Dhayanithi"
    },
    {
      rollNo: "CS18B1020",
      name: "Ramar Seetha Dhayanithi"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
