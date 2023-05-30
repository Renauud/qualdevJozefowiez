import * as asciichart from "asciichart";

export class AfficheurGraphique {
  private _tabTemperature: Array<number>;
  private _tabHumidité: Array<number>;

  constructor() {
    this._tabTemperature = [];
    this._tabHumidité = [];
  }

  set temperature(temp: number) {
    this._tabTemperature.push(temp);
  }

  set humidite(temp: number) {
    this._tabHumidité.push(temp);
  }

  affiche(): void {
    console.log(asciichart.plot([this._tabTemperature, this._tabHumidité]));
  }
}
