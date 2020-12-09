import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.sass']
})
export class SummaryViewComponent implements OnInit {

  @Input() courseType = "";
  @Input() feedback: string[] = [];
  feedbackPrecision: string[] = [];

  questions: string [] = [];
  avg = "";

  constructor() { }

  ngOnInit(): void {
    this.getQuestions();
    this.avg = (this.feedback.reduce((a, b) => a + parseFloat(b), 0) / this.feedback.length).toPrecision(2);
    this.feedback.forEach(value => {
      this.feedbackPrecision.push(parseFloat(value).toPrecision(2));
    });
  }

  getQuestions(): void {
    const theoryQn = [
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

    const labQn = [
      'Laboratories are well organized for experiments',
      'List of experiments are well defined',
      'Oppurtunity and facilities provided in the Lab for the use of theoritical knowledge gained in the classroom to learn and practice',
      'Skills and assistance provided during the Laboratory',
      'Transparency and fairness of Evaluation system for Laboratory Examinations'
    ];

    if (this.courseType === "theory") {
      this.questions = theoryQn;
    }
    else if (this.courseType === "lab") {
      this.questions = labQn;
    }
  }

}
