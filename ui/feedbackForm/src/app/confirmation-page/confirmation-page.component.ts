import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.sass']
})
export class ConfirmationPageComponent implements OnInit {

  lineOne = "Thank you for your response";
  lineTwo = "Have a nice day!";

  constructor() { }

  ngOnInit(): void {
  }

}
