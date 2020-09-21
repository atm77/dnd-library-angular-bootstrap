import { NgModule } from '@angular/core';

import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';

@NgModule({
  imports: [],
  exports: [AlertModalComponent, LoadingModalComponent],
  declarations: [AlertModalComponent, LoadingModalComponent],
  providers: [],
})
export class SharedModule {}
