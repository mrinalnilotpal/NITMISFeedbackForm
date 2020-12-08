import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.sass']
})
export class ToggleButtonComponent implements OnInit {

  isEnabled = false;

  constructor() { }

  @Input() label: string = "";

  ngOnInit(): void {
  }

  onClick(){
    this.isEnabled = true;
  }


}
