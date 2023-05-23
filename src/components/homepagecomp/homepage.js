import Navbar from '@/components/homepagecomp/Navbar'
import AboutMe from '@/components/homepagecomp/about-me'
import Skills from '@/components/homepagecomp/skills'
import Projects from '@/components/homepagecomp/projects'
import { HomeContext } from '@/contexts/HomeContext'
import { useEffect, useRef, useContext } from 'react'
import { gsap } from 'gsap'

export default function Homepage() {
    const mainsec= useRef()
    const { setMainSec } = useContext(HomeContext)
    useEffect(() =>{
        setMainSec(mainsec)
        
        // router.beforePopState((state) => {
        //     state.options.scroll = false;
        //     return true;
        // });
    },[])

    
    return (
        <div>
        <div style={{minHeight: '100vh', minWidth: '100%', background: 'rgb(255,85,85)', position: 'relative'}} ref={mainsec}>
            <Navbar />
            <AboutMe />
            <section style={{background:'black'}}>
                <Skills />
                <Projects />
            </section>
        </div>
        </div>
    )
}
