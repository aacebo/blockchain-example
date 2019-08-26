import { countReducer } from './count.reducer';

import { add } from '../../actions';
import { transactionMock } from '../../testing';

describe('countReducer', () => {
  it('should add to count on add', () => {
    const count = countReducer(0, add({ transaction: transactionMock() }));
    expect(count).toBe(1);
  });
});
