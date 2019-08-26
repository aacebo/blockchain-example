export interface ITransaction {
  readonly op: string;
  readonly x: {
    readonly lock_time: number;
    readonly ver: number;
    readonly size: number;
    readonly time: number;
    readonly tx_index: number;
    readonly vin_sz: number;
    readonly hash: string;
    readonly vout_sz: number;
    readonly relayed_by: string;
  };
}
