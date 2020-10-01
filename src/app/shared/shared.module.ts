import { NgModule } from '@angular/core';

import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { LoadingModalComponent } from './components/loading-modal/loading-modal.component';

@NgModule({
  imports: [],
  exports: [AlertModalComponent, LoadingModalComponent],
  declarations: [AlertModalComponent, LoadingModalComponent],
  providers: [],
})
export class SharedModule {}
