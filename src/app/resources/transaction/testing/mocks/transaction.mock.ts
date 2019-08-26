import { ITransaction } from '../../models';

export function transactionMock(t: Partial<ITransaction> = {}): ITransaction {
  return {
    op: 'test',
    x: {
      hash: 'test_hash',
      lock_time: 0,
      relayed_by: 'localhost',
      size: 1000,
      time: new Date().getTime() / 1000,
      tx_index: 0,
      ver: 1,
      vin_sz: 1,
      vout_sz: 1
    },
    ...t
  };
}
