import React, { useState, createContext } from "react"

const TransitionContext = createContext({})

const TransitionProvider = ({ children }) => {
  const [Enter, setEnter] = useState()
  const [Exit, setExit] = useState()

  return (
    <TransitionContext.Provider value={{Enter, setEnter, Exit, setExit}}>
        {children}
    </TransitionContext.Provider>
  )
}

export { TransitionContext, TransitionProvider }