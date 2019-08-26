import { createReducer, on } from '@ngrx/store';

import { environment } from '../../../../../environments/environment';
import * as actions from '../../actions/add.actions';

export const keysReducer = createReducer<number[]>(
  [],
  on(actions.add, (state, action) => {
    const keys = [...state, action.transaction.x.time];

    if (keys.length === environment.queueSize + 1) {
      keys.shift();
    }

    return keys;
  })
);
