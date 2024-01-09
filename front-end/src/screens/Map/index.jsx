import { BackButton } from "../../components/BackButton";
import { Filter } from "../../components/Filter";
import { Radar } from "../../components/Radar";
import { FilterContext } from "../../context/filterContext";
import { Container } from "./styles";

import { useContext } from "react";

export function Map({ route }) {
  const { chosenMap } = route.params;  
  const { filteredNades } = useContext(FilterContext)

  return(
    //adicionar o loading e render condicional quando for fazer a req para o backend
    //toda alteração no filter deve dar animação de loading no componente do radar
    <Container>
      <BackButton title={chosenMap} />
      <Radar map={chosenMap} nades={filteredNades} />
      <Filter />
    </Container>
  );
};