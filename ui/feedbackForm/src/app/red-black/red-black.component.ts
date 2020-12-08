import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-red-black',
  templateUrl: './red-black.component.html',
  styleUrls: ['./red-black.component.sass']
})
export class RedBlackComponent implements OnInit {

  constructor() { }

  @Input() red: string = '';
  @Input() black: string = '';

  ngOnInit(): void {
  }

}
