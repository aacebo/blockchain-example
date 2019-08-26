import { subscribedReducer } from './subscribed.reducer';

import { subscribe, unsubscribe } from '../../actions';

describe('subscribedReducer', () => {
  it('should subscribe', () => {
    const subscribed = subscribedReducer(false, subscribe());
    expect(subscribed).toBe(true);
  });

  it('should unsubscribe', () => {
    const subscribed = subscribedReducer(true, unsubscribe());
    expect(subscribed).toBe(false);
  });
});
