import { ThrowStmt } from '@angular/compiler';
import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.sass']
})
export class FormFieldComponent implements OnInit, DoCheck {
  @Input() question = "Effectiveness of delivery of lectures and communication";
  @Input() slNo = 1;
  currentRate = 0;
  oldRate: number;
  @Output() currentRateChange = new EventEmitter<number>();

  constructor() {
    this.oldRate = 0;
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.oldRate !== this.currentRate){
      this.currentRateChange.emit(this.currentRate);
      this.oldRate = this.currentRate;
    }
  }
}
