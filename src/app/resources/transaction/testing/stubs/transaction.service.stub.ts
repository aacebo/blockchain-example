import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITransactionState } from '../../transaction.state';

export class TransactionServiceStub {
  readonly state$ = new BehaviorSubject<ITransactionState>({
    count: 0,
    entities: {},
    keys: [],
    subscribed: false
  });

  get avgSize$() {
    return this.state$.asObservable().pipe(map(() => 0));
  }

  get count$() {
    return this.state$.asObservable().pipe(map(v => v.count));
  }

  get entities$() {
    return this.state$.asObservable().pipe(map(v => v.entities));
  }

  get keys$() {
    return this.state$.asObservable().pipe(map(v => v.keys));
  }

  get subscribed$() {
    return this.state$.asObservable().pipe(map(v => v.subscribed));
  }

  get latestTime$() {
    return this.state$.asObservable().pipe(map(() => new Date()));
  }

  get iterables$() {
    return this.state$.asObservable().pipe(map(v => Object.values(v.entities)));
  }

  subscribe() {}
  unsubscribe() {}
}
