export class AfficheurTexte {
  affiche(numberIter: number, temperature: number, humidité: number): void {
    console.log(
      "[ " +
        numberIter +
        " ] " +
        "Température : " +
        temperature +
        "°C / " +
        "Humidité : " +
        humidité +
        "%.\n"
    );
  }
}
