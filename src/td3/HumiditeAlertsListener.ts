import { IListener } from "./IListener";

export class HumiditeAlertsListener implements IListener {
  private _humidite: number[];

  constructor() {
    this._humidite = [];
  }

  public get humidite(): number[] {
    return this._humidite;
  }

  notify(data: number): void {
    this._humidite.push(data);
  }
}
