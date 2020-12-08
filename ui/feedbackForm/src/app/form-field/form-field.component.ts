import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.sass']
})

export class FormFieldComponent implements OnInit, DoCheck {
  @Input() question = "Effectiveness of delivery of lectures and communication";
  @Input() slNo = 1;
  @Input() currentRate = 0;
  oldRate: number;
  @Output() currentRateChange = new EventEmitter<number>();
  @Input() refresh = false;
  @Output() refreshChange = new EventEmitter<boolean>();

  constructor() {
    this.oldRate = 0;
  }

  ngOnInit(): void {
    this.oldRate = this.currentRate;
  }

  ngDoCheck(): void {
    if (this.oldRate !== this.currentRate){
      this.currentRateChange.emit(this.currentRate);
      this.oldRate = this.currentRate;
    }

    if (this.refresh === true) {
      this.currentRate = 0;
      this.oldRate = 0;
    }
  }
}
