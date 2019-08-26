import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { environment } from '../../../environments/environment';
import { WebsocketService } from '../../core/services';
import { ITransaction } from './models';
import { ITransactionState } from './transaction.state';

import * as selectors from './transaction.selectors';
import * as actions from './actions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  readonly state$: Observable<ITransactionState>;
  readonly keys$: Observable<number[]>;
  readonly entities$: Observable<{ [time: number]: ITransaction }>;
  readonly subscribed$: Observable<boolean>;
  readonly latestTime$: Observable<Date>;
  readonly iterables$: Observable<ITransaction[]>;
  readonly count$: Observable<number>;
  readonly avgSize$: Observable<number>;

  private _subscription$: Subscription;

  constructor(
    private readonly _websocketService: WebsocketService<ITransaction>,
    private readonly _store: Store<ITransactionState>
  ) {
    this.state$ = this._store.pipe(select(selectors.selectState));
    this.keys$ = this._store.pipe(select(selectors.selectKeys));
    this.entities$ = this._store.pipe(select(selectors.selectEntities));
    this.subscribed$ = this._store.pipe(select(selectors.selectSubscribed));
    this.latestTime$ = this._store.pipe(select(selectors.selectLatestTime));
    this.iterables$ = this._store.pipe(select(selectors.selectIterables));
    this.count$ = this._store.pipe(select(selectors.selectCount));
    this.avgSize$ = this._store.pipe(select(selectors.selectAvgSize));
  }

  subscribe() {
    this._store.dispatch(actions.subscribe());
    this._websocketService.subscribe(environment.endpoint);
    this._subscription$ = this._websocketService.feed$.subscribe(this.add.bind(this));
    this._websocketService.emit({ op: 'unconfirmed_sub' });
  }

  unsubscribe() {
    this._store.dispatch(actions.unsubscribe());
    this._websocketService.unsubscribe();
    this._subscription$.unsubscribe();
  }

  add(transaction: ITransaction) {
    this._store.dispatch(actions.add({ transaction }));
  }
}
