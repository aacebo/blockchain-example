import { createAction, props } from '@ngrx/store';

import { ITransaction } from '../models';

export const add = createAction(
  '[TRANSACTION] Add',
  props<{ transaction: ITransaction }>()
);
