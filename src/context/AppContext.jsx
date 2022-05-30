import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children})=>{
  const [movie, setMovie] = useState(null)

  return (
    <AppContext.Provider value={{movie, setMovie}}>
      {children}
    </AppContext.Provider>
  )
}