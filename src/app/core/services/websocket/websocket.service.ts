import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService<T = any> {
  private _socket$: WebSocketSubject<T>;

  get subscribed() {
    return this._socket$ && !this._socket$.isStopped;
  }

  get feed$() {
    return this._socket$.asObservable();
  }

  subscribe(uri: string) {
    this._socket$ = webSocket(uri);
  }

  unsubscribe() {
    this._socket$.unsubscribe();
  }

  emit(data: any) {
    this._socket$.next(data);
  }
}
