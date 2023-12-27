import { createContext, useState } from "react";

export const SelectedContext = createContext();

export default function SelectedContextProvider({children}) {
  const [clickedNade, setClickedNade] = useState(null);

  return (
    <SelectedContext.Provider value={{clickedNade, setClickedNade}}>
      {children}
    </SelectedContext.Provider>
  );
};