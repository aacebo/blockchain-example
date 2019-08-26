import { keysReducer } from './keys.reducer';

import { add } from '../../actions';
import { transactionMock } from '../../testing';

describe('keysReducer', () => {
  let state: number[] = [];

  it('should add key to array on add', () => {
    const t = transactionMock();
    const keys = keysReducer([], add({ transaction: t }));
    expect(keys[0]).toEqual(t.x.time);
  });

  it('should add key and shift array when max queue size reached', () => {
    let i = 0;

    while (i < 100) {
      i++;
      state = keysReducer(state, add({ transaction: transactionMock() }));
    }

    state = keysReducer(state, add({ transaction: transactionMock() }));
    expect(state.length).toEqual(100);
  });
});
