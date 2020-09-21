import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalsService } from './shared/services/common-modals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'dnd-library-angular-bootstrap';
  activeModal: NgbActiveModal;

  constructor(private commonModalsService: CommonModalsService) { }

  openAlertModal() {
    this.commonModalsService.showAlert('1', 'teste 1');
    this.commonModalsService.showAlert('2', 'teste 2');
  }

  openLoadingModal() {
    this.commonModalsService.startLoading('wait for a second...');
    window.setTimeout(() => {
      this.commonModalsService.stopLoading();
    }, 3000)
  }

}
