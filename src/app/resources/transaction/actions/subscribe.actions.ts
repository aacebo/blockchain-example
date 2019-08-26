import { createAction } from '@ngrx/store';

export const subscribe = createAction(
  '[TRANSACTION] Subscribe'
);

export const unsubscribe = createAction(
  '[TRANSACTION] UnSubscribe'
);

