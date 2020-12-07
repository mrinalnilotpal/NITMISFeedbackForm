import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-denial-page',
  templateUrl: './denial-page.component.html',
  styleUrls: ['./denial-page.component.sass']
})
export class DenialPageComponent implements OnInit {

  lineOne = "You have already filled this form"
  lineTwo = "Have a nice day!"

  constructor() { }

  ngOnInit(): void {
  }

}
