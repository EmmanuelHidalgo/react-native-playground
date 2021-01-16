
import React, { createContext, useState } from "react";

export const AmiiboContext = createContext();
export const AmiiboProvider = ({children}) => {

  const [ amiiboData, setAmiiboData ] = useState([]);

  return (
    <AmiiboContext.Provider value={{ amiiboData, setAmiiboData }}>
      { children }
    </ AmiiboContext.Provider>
  )
}