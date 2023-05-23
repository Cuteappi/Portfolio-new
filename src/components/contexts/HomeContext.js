import React, { useState, createContext } from "react"

const HomeContext = createContext({})

const HomeProvider = ({ children }) => {
    const [About, setAbout] = useState()
    const [Skill, setSkill] = useState()
    const [Project, setProject] = useState()
    const [Contact, setContact] = useState()
    const [MainSec, setMainSec] = useState()
  
    return (
        <HomeContext.Provider value={{About, Skill, Project, Contact, MainSec, setAbout, setSkill, setProject, setContact, setMainSec }}>
            {children}
        </HomeContext.Provider>
    )
}
  
  export { HomeProvider, HomeContext }