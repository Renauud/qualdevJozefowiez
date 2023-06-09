export class StationMétéo {
  private _temperature: number;
  private _humidité: number;

  constructor(temperature = 0, humidité = 15) {
    this._temperature = temperature;
    this.humidité = humidité;
  }

  public get temperature(): number {
    return this._temperature;
  }

  public set temperature(temperature: number) {
    this._temperature = temperature;
  }

  public get humidité(): number {
    return this._humidité;
  }

  public set humidité(humidité: number) {
    if (humidité < 0 || humidité > 100) {
      throw new Error("L'humidité est exprimée en pourcentage !");
    }
    this._humidité = humidité;
  }

  public getValuesFromIteration(n: number, tabTemp: number[], humiditeTab: number[]): string {
    // [n, tabTemp[n - 1], humiditeTab[n - 1]];
    return (
      "A l'itération " +
      n +
      ", il faisait " +
      tabTemp[n - 1] +
      "°C et l'humidité était de " +
      humiditeTab[n - 1] +
      "%."
    );
  }

  public toString(): string {
    return this._temperature + "°C\n" + this._humidité + "%";
  }
}
