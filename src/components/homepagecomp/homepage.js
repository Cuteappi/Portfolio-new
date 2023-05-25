import styles from './scss/home.module.scss'
import Navbar from '@/components/homepagecomp/Navbar'
import AboutMe from '@/components/homepagecomp/about-me'
import Skills from '@/components/homepagecomp/skills'
import Projects from '@/components/homepagecomp/projects'
import Contactme from '@/components/homepagecomp/contactme'

import { HomeContext } from '@/contexts/HomeContext'
import { TransitionContext } from '@/contexts/TransitionContext'
import { useEffect, useRef, useContext } from 'react'

export default function Homepage() {
    const mainsec= useRef()
    const { setMainSec } = useContext(HomeContext)
    const { completed, setCompleted } = useContext(TransitionContext)


    useEffect(() =>{
        setMainSec(mainsec)
        if(completed.state) return
        setCompleted({state: true})
        console.log(completed)
    },[completed])

    
    return (
        <div className={`${styles.MainSec}`} ref={mainsec}>
            <Navbar />
            <AboutMe />
            <section style={{background:'black'}}>
                <Skills />
                <Projects />
            </section>
            <Contactme/>
        </div>
    )
}
