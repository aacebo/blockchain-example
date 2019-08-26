import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusChipComponent } from './status-chip.component';

@NgModule({
  declarations: [StatusChipComponent],
  exports: [StatusChipComponent],
  imports: [CommonModule]
})
export class StatusChipModule { }
