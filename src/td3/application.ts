import * as rs from "readline-sync";

import { StationMétéo } from "./station-meteo";
import { AfficheurTexte } from "./afficheur-texte";
import { AfficheurGraphique } from "./afficheur-graphique";
import { TemperatureAlertsListener } from "./TemperatureAlertsListener";
import { HumiditeAlertsListener } from "./HumiditeAlertsListener";
import { EcartTempAlertsListener } from "./EcartTempAlertListener";

function main(): void {
  const aff = new AfficheurTexte();
  const aff2 = new AfficheurGraphique();
  const stationMeteo = new StationMétéo(10);
  const temperatureAlertListener = new TemperatureAlertsListener();
  const humiditeAlertListener = new HumiditeAlertsListener();
  let tempTab = temperatureAlertListener.temperature;
  let humiditeTab = humiditeAlertListener.humidite;
  let ecart = new EcartTempAlertsListener();

  humiditeAlertListener.notify(stationMeteo.humidité++);
  temperatureAlertListener.notify(stationMeteo.temperature);

  console.log("Appuyez sur entrée pour afficher la prochaine donnée");
  rs.question();

  for (let p = 0; p < 20; p++) {
    let numMesure = p + 1; // mise en forme pour l'affichage, pour ne pas avoir de mesure [ 0 ]
    aff.affiche(numMesure, tempTab[p], humiditeTab[p]); // affichage phrase modifiée pour l'éval
    aff2.temperature = tempTab[p];
    aff2.humidite = humiditeTab[p];
    if (p != 0) {
      console.log("L'écart de température est de " + ecart.getEcartMesure(tempTab, p) + "°C\n"); // pas réussit à faire de fonction toString pour éviter de devoir le mettre dans le main
      ecart.notify(ecart.getEcartMesure(tempTab, p)); //push l'écart dans un tableau
    }
    // aff2.affiche(); afficheur pas requis pour l'éval
    if (p < 19) {
      console.log("Appuyez sur entrée pour afficher la prochaine donnée");
      rs.question();
      if (p < 10) {
        humiditeAlertListener.notify(stationMeteo.humidité--);
        temperatureAlertListener.notify((stationMeteo.temperature += 2));
      } else {
        humiditeAlertListener.notify(stationMeteo.humidité++);
        temperatureAlertListener.notify((stationMeteo.temperature -= 3));
      }
    }
  }
  // console.log(tempTab, humiditeTab);
  // console.log(ecart.getEcart()); //getter du tableau dans lequel sont rangés les différenets valeurs des écarts.
  // console.log(stationMeteo.getValuesFromIteration(1, tempTab, humiditeTab)); // La fonction permet de récupérer la tempérautre et l'humidité en fonction de l'indice, et en renseignant les deux tableau requis.
}

main();
