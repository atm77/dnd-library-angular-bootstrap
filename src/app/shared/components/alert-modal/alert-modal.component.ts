import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal',
  templateUrl: 'alert-modal.component.html'
})
export class AlertModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) {}

  @Input() title: string;
  @Input() message: string;

  close(): void {
    this.activeModal.close();
  }

  ngOnInit() { }

}
