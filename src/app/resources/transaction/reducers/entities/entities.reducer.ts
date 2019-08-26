import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions/add.actions';
import { ITransaction } from '../../models';

export const entitiesReducer = createReducer<{ [time: number]: ITransaction }>(
  { },
  on(actions.add, (state, action) => {
    return {
      ...state,
      [action.transaction.x.time]: action.transaction
    };
  })
);
