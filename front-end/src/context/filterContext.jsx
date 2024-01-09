import { createContext, useState, useEffect } from "react";
import { api } from "../lib/axios.js";

export const FilterContext = createContext();

export default function FilterContextProvider({children}) {
  const [side, setSide] = useState("TR");
  const [type, setType] = useState("smoke");
  const [selectedMap, setSelectedMap] = useState("mirage")
  const [filteredNades, setFilteredNades] = useState();
  // const [selectedNade, setSelectedNade] = useState(false);

  // useEffect para resetar o filtro toda vez que abre o app

  async function fetchData() {
    try {
      const response = await api.get(`/grenades?map=${selectedMap}&side=${side}&type=${type}`)
      const data = response.data
      setFilteredNades(data);
      console.log(filteredNades)
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      //adicionar o alerta de erro na tela
    }
  };

  useEffect(() => {
    fetchData();
  }, [, selectedMap, side, type]);

  return (
    <FilterContext.Provider value={{side, setSide, type, setType, filteredNades, selectedMap, setSelectedMap}}>
      {children}
    </FilterContext.Provider>
  );
};