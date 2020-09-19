import { Component } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalService } from './shared/alert-modal/alert-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'dnd-library-angular-bootstrap';
  activeModal: NgbActiveModal;

  constructor(private modalService: NgbModal, private alertModalService: AlertModalService) { }

  openAlertModal() {
    this.alertModalService.showAlert("aokdoks", "asokasko");
  }

}
