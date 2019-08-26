import { WebsocketService } from './websocket.service';

import { environment } from '../../../../environments/environment';

describe('WebsocketService', () => {
  let service: WebsocketService;

  beforeEach(() => {
    service = new WebsocketService();
    service.subscribe(environment.endpoint);
  });

  describe('subscribe', () => {
    it('should subscribe', () => {
      expect(service.subscribed).toBe(true);
    });
  });

  describe('unsubscribe', () => {
    it('should unsubscribe', () => {
      service.unsubscribe();
      expect(service.subscribed).toBe(false);
    });
  });

  describe('emit', () => {
    it('should emit message', (done) => {
      service.feed$.subscribe(t => {
        expect(t).toBeDefined();
        done();
      });

      service.emit({ op: 'unconfirmed_sub' });
    });
  });
});
