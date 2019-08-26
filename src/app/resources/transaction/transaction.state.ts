import { combineReducers, Action } from '@ngrx/store';

import * as fromReducers from './reducers';
import { ITransaction } from './models';

export interface ITransactionState {
  readonly count: number;
  readonly subscribed: boolean;
  readonly keys: number[];
  readonly entities: { [time: number]: ITransaction };
}

export function reducers(state: ITransactionState, action: Action) {
  return combineReducers<ITransactionState>({
    count: fromReducers.countReducer,
    subscribed: fromReducers.subscribedReducer,
    entities: fromReducers.entitiesReducer,
    keys: fromReducers.keysReducer
  })(state, action);
}
