import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions/add.actions';

export const countReducer = createReducer<number>(
  0,
  on(actions.add, (state) => state + 1)
);
