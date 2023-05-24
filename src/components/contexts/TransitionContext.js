import React, { useState, createContext } from "react"

const TransitionContext = createContext({})

const TransitionProvider = ({ children }) => {
  const [Enter, setEnter] = useState()
  const [Exit, setExit] = useState()
  const [completed, setCompleted] = useState({state: false, Mainsec: null})

  return (
    <TransitionContext.Provider value={{Enter, setEnter, Exit, setExit, completed, setCompleted}}>
        {children}
    </TransitionContext.Provider>
  )
}

export { TransitionContext, TransitionProvider }