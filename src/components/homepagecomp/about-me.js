import React from 'react'
import styles from './scss/about.module.scss'
import { useEffect, useContext } from 'react'
import { HomeContext } from '@/contexts/HomeContext'
import { TransitionContext } from '@/contexts/TransitionContext'
import { gsap }  from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function aboutMe() {
    const { completed } = useContext(TransitionContext)
    const { MainSec } = useContext(HomeContext)


    useEffect(() =>{
        if (!completed) return
        if(MainSec){
            console.log(MainSec.current)

            const About = MainSec.current.querySelector(`.AboutSection`)
            const Text = MainSec.current.querySelector(`.${styles.name}`)
            const Waves = MainSec.current.querySelectorAll(`.${styles.waves}`)

            const ctx = gsap.context(()=>{
                const t1 = gsap.timeline({
                    scrollTrigger:{
                        trigger: About,
                        start: '-6.5% top',
                        end: '+=1500px',
                        pin: true,
                        scrub: 1.5,
                        //markers: true
                    }
                })
                t1.to(Text,{ y: '65vh', opacity:0.7},0)
                .fromTo(Waves[0],{background: 'linear-gradient( rgb(56, 5, 5) 70%, rgb(0, 0, 0) 100%)'},
                    {y:'-13.9vh', background: 'linear-gradient( rgb(56, 5, 5) 40%, rgb(0, 0, 0) 100%)'},0)
                .to(Waves[1],{y:'-11vh'},0)
                .to(Waves[2],{y:'-11vh'},0)
                .to(Waves[3],{y:'-3vh'},0)
                .to(Waves[4],{y:'5vh'},0)
            })

            return ()=> {
                ctx.revert();

            }
        }
    },[completed])

    return (
        <div>
        <section className={`${styles.about_section} AboutSection`}>
            <div className={styles.name}>
                <h1>Hello,</h1>
                <h1>my name is Solomon</h1>
                <div className={styles.about_me}>
                    <span className={styles.span}>I am a full Stack Developer focused on</span>
                    <span className={styles.span}>creating beautiful web designs</span>
                </div>
            </div>

            <div className={`${styles.waves} ${styles.wave0}`}></div>
            <div className={`${styles.waves} ${styles.wave1}`}></div>
            <div className={`${styles.waves} ${styles.wave2}`}></div>
            <div className={`${styles.waves} ${styles.wave3}`}></div>
            <div className={`${styles.waves} ${styles.wave4}`}></div>
            
        </section>
        </div>
    )
}
