import React, { useState, createContext } from "react"

const HomeContext = createContext({})

const HomeProvider = ({ children }) => {
    const [About, setAbout] = useState()
    const [Skill, setSkill] = useState()
    const [Project, setProject] = useState()
    const [Contact, setContact] = useState()
  
    return (
        <HomeContext.Provider value={{About, Skill, Project, Contact, setAbout, setSkill, setProject, setContact}}>
            {children}
        </HomeContext.Provider>
    )
}
  
  export { HomeProvider, HomeContext }