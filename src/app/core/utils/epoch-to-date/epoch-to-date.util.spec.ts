import { epochToDate } from './epoch-to-date.util';

describe('epochToDate', () => {
  it('should get epoch date from timestamp', () => {
    const date = epochToDate(1000);
    expect(date).toEqual(new Date(1000 * 1000));
  });
});
