import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalService } from './shared/alert-modal/alert-modal.service';
import { LoadingModalService } from './shared/loading-modal/loading-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'dnd-library-angular-bootstrap';
  activeModal: NgbActiveModal;

  constructor(private modalService: NgbModal, private alertModalService: AlertModalService, private loadingModalService: LoadingModalService) { }

  openAlertModal() {
    this.alertModalService.showAlert("aokdoks", "asokasko");
  }

  openLoadingModal() {
    this.loadingModalService.startLoading('wait for a second...');
    window.setTimeout(() => {
      this.loadingModalService.stopLoading();
    }, 3000)
  }

}
