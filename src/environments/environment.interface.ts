export interface IEnvironment {
  readonly production: boolean;
  readonly endpoint: string;
  readonly queueSize: number;
}
