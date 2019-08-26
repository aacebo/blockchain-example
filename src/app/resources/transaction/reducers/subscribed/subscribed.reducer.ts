import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions/subscribe.actions';

export const subscribedReducer = createReducer(
  false,
  on(actions.subscribe, () => true),
  on(actions.unsubscribe, () => false)
);
