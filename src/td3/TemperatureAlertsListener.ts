import { IListener } from "./IListener";

export class TemperatureAlertsListener implements IListener {
  private _temperature: number[];

  constructor() {
    this._temperature = [];
  }

  public get temperature(): number[] {
    return this._temperature;
  }

  notify(data: number): void {
    this._temperature.push(data);
  }
}
