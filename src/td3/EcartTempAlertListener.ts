import { IListener } from "./IListener";

export class EcartTempAlertsListener implements IListener {
  private _ecart: number[];

  constructor() {
    this._ecart = [];
  }

  getEcart(): number[] {
    return this._ecart;
  }

  public getEcartMesure(t: number[], n: number): number {
    return t[n] - t[n - 1];
  }

  public notify(data: number): void {
    this._ecart.push(data);
  }
}
