import React, { useState, createContext } from "react"

const HomeContext = createContext({})

const HomeProvider = ({ children }) => {
    const [MainSec, setMainSec] = useState()
  
    return (
        <HomeContext.Provider value={{MainSec, setMainSec }}>
            {children}
        </HomeContext.Provider>
    )
}
  
  export { HomeProvider, HomeContext }