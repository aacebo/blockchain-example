import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './transaction.state';

@NgModule({
  imports: [
    StoreModule.forFeature('transaction', reducers)
  ]
})
export class TransactionModule { }
