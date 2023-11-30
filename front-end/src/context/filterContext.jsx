import { createContext, useState, useEffect } from "react";

export const FilterContext = createContext();

export default function FilterContextProvider({children}) {
  const [side, setSide] = useState("TR");
  const [type, setType] = useState("smoke");
  const [selectedMap, setSelectedMap] = useState("mirage")
  const [selectedNade, setSelectedNade] = useState(false);
  const [filteredNades, setFilteredNades] = useState();

  // useEffect para resetar o filtro toda vez que abre o app

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3001/grenades?map=${selectedMap}&side=${side}&type=${type}`;

        const response = await fetch(url);
        const data = await response.json();
        setFilteredNades(data);

        console.log(filteredNades)
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchData();
  }, [, selectedMap, side, type]);

  return (
    <FilterContext.Provider value={{side, setSide, type, setType, selectedNade, setSelectedNade, filteredNades, selectedMap, setSelectedMap}}>
      {children}
    </FilterContext.Provider>
  );
};