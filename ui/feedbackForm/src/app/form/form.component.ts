import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Input() rating = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  @Input() subjectType = "theory";

  @Output() emitRating = new EventEmitter<number[]>();

  readonly theoryQn = [
    'Lectures are well prepared',
    'Effectiveness of delivery of lectures and communication',
    'Knowledgable and makes the course interesting',
    'Encourages discussion, creative/ critical thinking and clears doubts',
    'Regular & punctual to the class',
    'Cycle test papers are evaluated and distributed in time',
    'Transparency and fairness of Evaluation system/ Internal Examinations',
    'Availability of the Faculty after class hours for guidance',
    'The prescribed syllabi is entirely completed',
    'The source material (books etc) for each portion covered in the syllabi is clearly informed'
  ];

  readonly labQn = [
    'Laboratories are well organized for experiments',
    'List of experiments are well defined',
    'Oppurtunity and facilities provided in the Lab for the use of theoritical knowledge gained in the classroom to learn and practice',
    'Skills and assistance provided during the Laboratory',
    'Transparency and fairness of Evaluation system for Laboratory Examinations'
  ];

  constructor() { }

  ngOnInit(): void {
    if (this.subjectType === "lab") {
      this.rating = [0, 0, 0, 0, 0];
    }
  }
}
