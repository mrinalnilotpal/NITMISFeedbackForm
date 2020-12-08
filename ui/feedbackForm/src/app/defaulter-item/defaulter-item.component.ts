import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-defaulter-item',
  templateUrl: './defaulter-item.component.html',
  styleUrls: ['./defaulter-item.component.sass']
})
export class DefaulterItemComponent implements OnInit {

  @Input() red: string = '';
  @Input() black: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
