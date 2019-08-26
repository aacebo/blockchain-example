import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TransactionService } from './resources/transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(readonly transactionService: TransactionService) { }

  subscribe() {
    this.transactionService.subscribe();
  }

  unsubscribe() {
    this.transactionService.unsubscribe();
  }
}
