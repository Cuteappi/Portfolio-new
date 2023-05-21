import React from 'react'
import styles from './scss/about.module.scss'
import { useEffect, useContext, useRef } from 'react'
import { HomeContext } from '@/contexts/HomeContext'
import gsap  from 'gsap'
import { Power1 } from "gsap";
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
            t1.to(textref.current,{ y: 500, opacity:0.5})

            const wave = gsap.timeline({
                scrollTrigger:{
                    trigger: Aboutref.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            })
            wave.to(waveref.current,{y:'-5vh', stagger: -0.2})
    
        },500)

        const w0 = gsap.timeline({repeat: -1, yoyo: true})
        w0.to(waveref.current[0],{
            clipPath : 'polygon(0% 100%, 0% 88.37%, 3% 86.37%, 8% 87.37%, 14% 88.37%, 19% 86.37%, 30.04% 85.06%, 39.04% 84.06%, 42.78% 85.16%, 49.04% 84.06%, 54.1% 86.77%, 59.05% 87.49%, 65.05% 89.49%, 71.05% 88.49%, 76.4% 84.98%, 80.4% 83.98%, 85.4% 82.98%, 89.4% 82.98%, 92.4% 79.98%, 96.4% 79.98%, 100% 85.78%, 100% 100%)',
            duration: 2,
            ease: Power1.easeInOut
        })
        .to(waveref.current[0],{
            clipPath: 'polygon(0% 100%, 0% 87.58%, 3.1% 85.83%, 8.1% 86.83%, 14.1% 87.83%, 19.1% 85.83%, 29.62% 89.93%, 38.63% 90.98%, 42.53% 90.68%, 49.04% 89.25%, 54.61% 85.34%, 59.51% 82.74%, 65.46% 81.87%, 70.88% 80.3%, 76.35% 81.33%, 80.57% 81.33%, 84.58% 83.69%, 88.93% 85%, 92.28% 86.31%, 96.16% 86.95%, 100% 86.83%, 100% 100%)',
            duration: 1.5,
            ease: Power1.easeInOut
        })
        .to(waveref.current[0],{
            clipPath : 'polygon(0% 100%, 0% 85.78%, 3% 83.78%, 8% 84.78%, 14% 85.78%, 19% 83.78%, 30% 87.78%, 39% 86.78%, 43% 88.78%, 49% 86.78%, 54% 87.78%, 59% 85.78%, 65% 87.78%, 71% 86.78%, 76% 86.78%, 80% 85.78%, 85% 84.78%, 89% 84.78%, 92% 81.78%, 96% 81.78%, 100% 85.78%, 100% 100%)',
            duration: 2,
            ease: Power1.easeInOut
        })

        

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
