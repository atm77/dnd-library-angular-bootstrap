import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loading-modal',
  templateUrl: 'loading-modal.component.html',
  styleUrls: ['loading-modal.component.scss']
})
export class LoadingModalComponent {

  constructor(private activeModal: NgbActiveModal) {  }

  @Input() message: string;

  close(): void {
    this.activeModal.close();
  }


}
