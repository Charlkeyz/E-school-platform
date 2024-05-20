import { createContext } from "react"; //This is create the context
import { cardsubscribe } from "../mydataArray/Cardarray";
import { useState } from "react";
export const DetailsContext = createContext();

const AllContextProvider = ({ children }) => {
  const [ismonthlyOnLeft, setIsmonthlyOnLeft] = useState(true);

  const valueToBePassed = {
    ismonthlyOnLeft,
    setIsmonthlyOnLeft,
    cardsubscribe: cardsubscribe,
  };

  return (
    <DetailsContext.Provider value={valueToBePassed}>
      {children}
    </DetailsContext.Provider>
  );
};

export default AllContextProvider;
