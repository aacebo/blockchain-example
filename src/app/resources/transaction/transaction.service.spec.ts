import { TestBed, async } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import * as actions from './actions';
import { StoreStub } from '../../testing';
import { transactionMock } from './testing';
import { TransactionService } from './transaction.service';
import { ITransactionState } from './transaction.state';

describe('TransactionService', () => {
  let service: TransactionService;
  let store: Store<ITransactionState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: Store,
        useClass: StoreStub
      }]
    });
  }));

  beforeEach(() => {
    service = TestBed.get<TransactionService>(TransactionService);
    store = TestBed.get<Store<ITransactionState>>(Store);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('subscribe', () => {
    it('should dispatch subscribe action', () => {
      const spy = spyOn(store, 'dispatch');
      service.subscribe();
      expect(spy).toHaveBeenCalledWith(actions.subscribe());
    });
  });

  describe('unsubscribe', () => {
    it('should dispatch unsubscribe action', () => {
      service.subscribe();
      const spy = spyOn(store, 'dispatch');
      service.unsubscribe();
      expect(spy).toHaveBeenCalledWith(actions.unsubscribe());
    });
  });

  describe('add', () => {
    it('should dispatch add action', () => {
      const spy = spyOn(store, 'dispatch');
      const t = transactionMock();
      service.add(t);
      expect(spy).toHaveBeenCalledWith(actions.add({ transaction: t }));
    });
  });
});
