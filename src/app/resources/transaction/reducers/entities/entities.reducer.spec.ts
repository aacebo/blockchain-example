import { entitiesReducer } from './entities.reducer';

import { add } from '../../actions';
import { transactionMock } from '../../testing';

describe('entitiesReducer', () => {
  it('should add entity to map on add', () => {
    const t = transactionMock();
    const entities = entitiesReducer({ }, add({ transaction: t }));
    expect(entities[t.x.time]).toEqual(t);
  });
});
