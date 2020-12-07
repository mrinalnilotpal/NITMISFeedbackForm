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
  @Output() currentRateChanged = new EventEmitter<number>();
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
      this.currentRateChanged.emit(this.currentRate);
      this.oldRate = this.currentRate;
    }

    if (this.refresh === true) {
      this.currentRate = 0;
      this.oldRate = 0;
    }
  }
}
