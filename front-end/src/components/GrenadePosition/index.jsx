import { Container, NadeIcon } from "./styles";
import Smoke from "../../../assets/icons/smoke.png";
import Flash from "../../../assets/icons/flashbang.png";
import Molotov from "../../../assets/icons/molotov.png";
import Grenade from "../../../assets/icons/explosion.png";

export function GrenadePosition({type, xAxis, yAxis, onPress}) {  
  const selectIcon = (() => {
    switch(type) {
      case 'smoke':
        return Smoke;
      case 'flash':
        return Flash;
      case 'molotov':
        return Molotov;
      case 'grenade':
        return Grenade;
      default:
        return null;
    }
  })();
  
  return (
    <Container x={xAxis} y={yAxis} onPress={onPress}>
      <NadeIcon 
        source={selectIcon}
        resizeMode="contain"
      />
    </Container>
  )
}