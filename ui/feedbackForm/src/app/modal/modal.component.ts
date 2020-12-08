import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() modelOpen = false;
  @Output() modelOpenChange = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {}

  open(content: any): void {
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.modalService.open("<h1>asdfas</h1>", {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.modelOpen);
    if (this.modelOpen === true) {
      this.open({});
      this.modelOpen = false;
    }
  }

}
