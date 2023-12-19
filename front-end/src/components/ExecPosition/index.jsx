import { Container, NadeIcon } from "./styles";
import Position from "../../../assets/icons/position.png";

export function ExecPosition({xAxis, yAxis}) { 
  return (
    <Container x={xAxis} y={yAxis}>
      <NadeIcon 
        source={Position}
        resizeMode="contain"
      />
    </Container>
  )
}