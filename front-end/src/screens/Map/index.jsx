import { BackButton } from "../../components/BackButton";
import { Filter } from "../../components/Filter";
import { Container, Radar } from "./styles";

import de_mirage from "../../../assets/radar-images/de_mirage_radar.png";
import de_inferno from "../../../assets/radar-images/de_inferno_radar.png";
import de_overpass from "../../../assets/radar-images/de_overpass_radar.png";
import de_dust from "../../../assets/radar-images/de_dust_radar.png";
import de_nuke from "../../../assets/radar-images/de_nuke_radar.png";
import de_ancient from "../../../assets/radar-images/de_ancient_radar.png";
import de_anubis from "../../../assets/radar-images/de_anubis_radar.png";
import de_vertigo from "../../../assets/radar-images/de_vertigo_radar.png";

export function Map({ route }) {
  const { selectedMap } = route.params;
  
  const radarImage = (() => {
    switch (selectedMap.toLowerCase()) {
      case 'mirage':
        return de_mirage;
      case 'inferno':
        return de_inferno;
      case 'overpass':
        return de_overpass;
      case 'dust':
        return de_dust;
      case 'nuke':
        return de_nuke;
      case 'ancient':
        return de_ancient;
      case 'anubis':
        return de_anubis;
      case 'vertigo':
        return de_vertigo;
      default:
        return null;
    }
  })();

  return(
    <Container>
      <BackButton title={selectedMap}/>
      <Radar source={radarImage}/>
      <Filter />
    </Container>
  );
};