import * as rs from "readline-sync";

import { StationMétéo } from "./station-meteo";
import { AfficheurTexte } from "./afficheur-texte";
import { AfficheurGraphique } from "./afficheur-graphique";
import { TemperatureAlertsListener } from "./TemperatureAlertsListener";
import { HumiditeAlertsListener } from "./HumiditeAlertsListener";

function main(): void {
  const aff = new AfficheurTexte();
  const aff2 = new AfficheurGraphique();
  const stationMeteo = new StationMétéo(10);
  const temperatureAlertListener = new TemperatureAlertsListener();
  const humiditeAlertListener = new HumiditeAlertsListener();
  let tempTab = temperatureAlertListener.temperature;
  let humiditeTab = humiditeAlertListener.humidite;

  humiditeAlertListener.notify(stationMeteo.humidité++);
  temperatureAlertListener.notify(stationMeteo.temperature);

  console.log("Appuyez sur entrée pour le prochain affichage");
  rs.question();

  for (let p = 0; p < 20; p++) {
    aff.affiche(tempTab[p], humiditeTab[p]);
    aff2.temperature = tempTab[p];
    aff2.humidite = humiditeTab[p];
    aff2.affiche();
    if (p < 19) {
      console.log("Appuyez sur entrée pour le prochain affichage");
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
  console.log(tempTab, humiditeTab);
}

main();
