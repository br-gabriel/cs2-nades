import { useContext } from "react";
import { Container, RadarMap } from "./styles";
import { GrenadePosition } from "../GrenadePosition";
import { ExecPosition } from "../ExecPosition";
import { SelectedContext } from "../../context/selectedContext";

import de_mirage from "../../../assets/radar-images/de_mirage_radar.png";
import de_inferno from "../../../assets/radar-images/de_inferno_radar.png";
import de_overpass from "../../../assets/radar-images/de_overpass_radar.png";
import de_dust from "../../../assets/radar-images/de_dust_radar.png";
import de_nuke from "../../../assets/radar-images/de_nuke_radar.png";
import de_ancient from "../../../assets/radar-images/de_ancient_radar.png";
import de_anubis from "../../../assets/radar-images/de_anubis_radar.png";
import de_vertigo from "../../../assets/radar-images/de_vertigo_radar.png";

export function Radar({ map, nades }) {
  const radarImage = (() => {
    switch (map) {
      case 'Mirage':
        return de_mirage;
      case 'Inferno':
        return de_inferno;
      case 'Overpass':
        return de_overpass;
      case 'Dust II':
        return de_dust;
      case 'Nuke':
        return de_nuke;
      case 'Ancient':
        return de_ancient;
      case 'Anubis':
        return de_anubis;
      case 'Vertigo':
        return de_vertigo;
      default:
        return null;
    }
  })();

  const {clickedNade, setClickedNade} = useContext(SelectedContext)

  const dados = [
    { id: 1, name: 'Smoke passagem', type: 'smoke', side: 'TR', map: 'mirage', coordinates: [46, 62] },
    { id: 2, name: 'Smoke cabecinha', type: 'smoke', side: 'TR', map: 'mirage', coordinates: [51, 62] },
    { id: 3, name: 'Smoke CT', type: 'smoke', side: 'TR', map: 'mirage', coordinates: [42, 76] },
    { id: 4, name: 'Smoke caverna', type: 'smoke', side: 'CT', map: 'mirage', coordinates: [64, 60] },
    { id: 5, name: 'Smoke palácio', type: 'smoke', side: 'CT', map: 'mirage', coordinates: [61, 72] }
  ]

  const positions = [
    { id_pos: 1, title: 'corner', coordinates: [83, 52] },
    { id_pos: 2, title: 'base tr', coordinates: [78, 52] }
  ]

  return (
    <Container>
      <RadarMap source={radarImage} />
      {dados.map((item) => (
        (!clickedNade || clickedNade.id === item.id) && (
          <GrenadePosition
            key={item.id}
            type={item.type}
            xAxis={item.coordinates[0]}
            yAxis={item.coordinates[1]}
            onPress={() => setClickedNade(item)}
          />
        )
      ))}

      {clickedNade && (
        positions.map((position) => (
          <ExecPosition
            key={position.id_pos}
            title={position.title}
            xAxis={position.coordinates[0]}
            yAxis={position.coordinates[1]}
          />
        ))
      )}
    </Container>
  );
};