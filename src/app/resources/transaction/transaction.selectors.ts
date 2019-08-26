import { createFeatureSelector, createSelector } from '@ngrx/store';

import { epochToDate } from '../../core/utils';
import { ITransactionState } from './transaction.state';
import { ITransaction } from './models';

export const selectState = createFeatureSelector<ITransactionState>('transaction');

export const selectCount = createSelector(selectState, state => state.count);
export const selectKeys = createSelector(selectState, state => state.keys);
export const selectEntities = createSelector(selectState, state => state.entities);
export const selectSubscribed = createSelector(selectState, state => state.subscribed);

export const selectIterables = createSelector(selectState, state => {
  const arr: ITransaction[] = [];

  for (const key of state.keys) {
    arr.push(state.entities[key]);
  }

  return arr;
});

export const selectLatestTime = createSelector(selectState, state => {
  if (state.keys.length > 0) {
    return epochToDate(state.keys[0]);
  }
});

export const selectAvgSize = createSelector(selectState, state => {
  const entities = Object.values(state.entities);
  let total = 0;

  for (const entity of entities) {
    total += entity.x.size;
  }

  return Math.round((total / entities.length) || 0);
});
