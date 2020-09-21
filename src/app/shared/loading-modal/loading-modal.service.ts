import { Injectable } from "@angular/core";

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { LoadingModalComponent } from './loading-modal.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingModalService {

  activeModal: NgbActiveModal;

  constructor( private modalService: NgbModal) {}

  startLoading(message: string): void {
    const modal = this.modalService.open(LoadingModalComponent, { beforeDismiss: () => false });
    modal.componentInstance.message = message;
    this.activeModal = modal;
  }

  stopLoading(): void {
    if ( this.activeModal ) {
      this.activeModal.close();
    }
  }

}
