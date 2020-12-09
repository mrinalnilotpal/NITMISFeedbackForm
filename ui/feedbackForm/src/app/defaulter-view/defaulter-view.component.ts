import { Component, Input, OnInit } from '@angular/core';
import { DefaulterData } from '../types';

@Component({
  selector: 'app-defaulter-view',
  templateUrl: './defaulter-view.component.html',
  styleUrls: ['./defaulter-view.component.sass']
})
export class DefaulterViewComponent implements OnInit {

  @Input() defaulters: DefaulterData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
