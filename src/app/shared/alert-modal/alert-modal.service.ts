import { Injectable } from "@angular/core";

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlertModalComponent } from './alert-modal.component';

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {

  constructor( private modalService: NgbModal) {}

  showAlert(message: string, title: string): void {
    const modal = this.modalService.open(AlertModalComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.message = message;
  }

}
