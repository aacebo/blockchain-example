import { BehaviorSubject } from 'rxjs';

export class StoreStub<T = any> {
  private readonly _state = new BehaviorSubject<T | undefined>(undefined);

  setState(data: T) {
    this._state.next(data);
  }

  dispatch() {}

  pipe() {
    return this._state.asObservable();
  }
}
