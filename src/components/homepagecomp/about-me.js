import React from 'react'
import styles from './scss/about.module.scss'
import { useEffect, useContext, useRef } from 'react'
import { HomeContext } from '@/contexts/HomeContext'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function aboutMe() {
    const { setAbout } = useContext(HomeContext)
    const Aboutref = useRef()
    const textref =useRef()
    const waveref =useRef(new Array())

    useEffect(() =>{
        setAbout(Aboutref)
        setTimeout(() =>{
            const t1 = gsap.timeline({
                scrollTrigger:{
                    trigger: Aboutref.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            })
            t1.to(textref.current,{ y: 500, opacity:0})

            const w0 = gsap.timeline({
                scrollTrigger:{
                    trigger: waveref.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            })
        
            //w0.to(waveref.current,{y:'-20vh'})
    
        },500)

        

    },[])

    return (
        <section className={styles.about_section} ref={Aboutref}>
            <div className={styles.name} ref={textref}>
                <h1>Hello,</h1>
                <h1>my name is Solomon</h1>
                <div className={styles.about_me}>
                    <span className={styles.span}>I am a full Stack Developer focused on</span>
                    <span className={styles.span}>creating beautiful web designs</span>
                </div>
            </div>
            <div className={`${styles.waves} ${styles.wave0}`} ref={(element) => waveref.current.push(element)}></div>
            <div className={`${styles.waves} ${styles.wave1}`} ref={(element) => waveref.current.push(element)}></div>
            <div className={`${styles.waves} ${styles.wave2}`} ref={(element) => waveref.current.push(element)}></div>
            <div className={`${styles.waves} ${styles.wave3}`} ref={(element) => waveref.current.push(element)}></div>
            <div className={`${styles.waves} ${styles.wave4}`} ref={(element) => waveref.current.push(element)}></div>
        </section>
    )
}
