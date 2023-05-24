import styles from './scss/home.module.scss'
import Navbar from '@/components/homepagecomp/Navbar'
import AboutMe from '@/components/homepagecomp/about-me'
import Skills from '@/components/homepagecomp/skills'
import Projects from '@/components/homepagecomp/projects'
import { HomeContext } from '@/contexts/HomeContext'
import { TransitionContext } from '@/contexts/TransitionContext'
import { useEffect, useRef, useContext } from 'react'
import { useRouter } from 'next/router'

export default function Homepage() {
    const router = useRouter()
    const mainsec= useRef()
    const { setMainSec } = useContext(HomeContext)
    const { completed, setCompleted } = useContext(TransitionContext)


    useEffect(() =>{
        setMainSec(mainsec)
        if(completed.state) return
        setCompleted({state: true, Mainsec: mainsec})
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
        </div>
    )
}
