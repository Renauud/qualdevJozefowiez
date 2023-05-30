export class AfficheurTexte {
  affiche(temperature: number, humidité: number): void {
    console.log(temperature + "°C\n" + humidité + "%");
  }
}
