import Navbar from '@/components/homepagecomp/Navbar'
import AboutMe from '@/components/homepagecomp/about-me'
import Skills from '@/components/homepagecomp/skills'
import Projects from '@/components/homepagecomp/projects'
import { HomeContext } from '@/contexts/HomeContext'
import { useEffect, useRef, useContext } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Homepage() {
    const mainsec= useRef()
    const { About } = useContext(HomeContext)

    // useEffect(() => {
    //     if(About){
    //         setTimeout(() =>{
    //             const t1 = gsap.timeline({
    //                 scrollTrigger:{
    //                     trigger: About.current,
    //                     start: 'top top',
    //                     end: 'bottom top',
    //                     pin: true,
    //                     pinSpacing: false,
    //                     scrub: 1
    //                 }
    //             })
    //         },500)
    //     }
    // },[About])
    
    return (
        <div style={{minHeight: '100vh', minWidth: '100%', background: 'rgb(255,85,85)'}}>
            <Navbar />
            <AboutMe />
            <section style={{background:'black'}} ref={mainsec}>
                <Skills />
                <Projects />
            </section>
        </div>
    )
}
