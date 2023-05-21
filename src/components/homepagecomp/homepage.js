import Navbar from '@/components/homepagecomp/Navbar'
import AboutMe from '@/components/homepagecomp/about-me'
import Skills from '@/components/homepagecomp/skills'
import Projects from '@/components/homepagecomp/projects'
import { useEffect, useContext } from 'react'

export default function Homepage() {
    return (
        <div style={{minHeight: '100vh', minWidth: '100%', background: 'rgb(255,85,85)'}}>
            <Navbar />
            <AboutMe />
            <section style={{background:'black'}}>
                <Skills />
                <Projects />
            </section>
        </div>
    )
}
