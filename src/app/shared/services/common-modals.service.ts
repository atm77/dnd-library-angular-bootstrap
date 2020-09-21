import { Injectable } from "@angular/core";

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { LoadingModalComponent } from '../loading-modal/loading-modal.component';

@Injectable({
  providedIn: 'root',
})
export class CommonModalsService {

  constructor( private modalService: NgbModal) {}

  activeLoadingModal: NgbActiveModal;

  showAlert(message: string, title: string): void {
    const modal = this.modalService.open(AlertModalComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.message = message;
  }

  startLoading(message: string): void {
    const modal = this.modalService.open(LoadingModalComponent, { beforeDismiss: () => false });
    modal.componentInstance.message = message;
    this.activeLoadingModal = modal;
  }

  stopLoading(): void {
    if ( this.activeLoadingModal ) {
      this.activeLoadingModal.close();
    }
  }

}
