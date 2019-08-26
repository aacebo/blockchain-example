import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: true,
  endpoint: 'wss://ws.blockchain.info/inv',
  queueSize: 100
};
