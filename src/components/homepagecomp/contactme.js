import styles from './scss/contact.module.scss'
import { useEffect, useContext } from 'react'
import { TransitionContext } from '@/contexts/TransitionContext'
import { HomeContext } from '@/contexts/HomeContext'
import { gsap }  from 'gsap'
import { Power2 } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contactme() {
    const { completed } = useContext(TransitionContext)
    const { MainSec } = useContext(HomeContext)

    useEffect(() =>{
        if (!completed) return
        if(MainSec){
            const Contact = MainSec.current.querySelector(`.ContactSection`)
            const heading = MainSec.current.querySelectorAll(`.Contactheading`)
            const Bgtrans = MainSec.current.querySelectorAll(`.Bgtrans`)
            const Mail = MainSec.current.querySelector(`.Mail`)

            const ctx = gsap.context(()=>{
    
                const t1 = gsap.timeline({
                    scrollTrigger:{
                        trigger: Contact,
                        start: 'top top',
                        end: '+=500px',
                        pin: true,
                        scrub: 1.5,
                    }
                })
                t1.from(heading,{ y: -600, opacity: 0, duration: 1},0)
                .from(Mail,{ y: 600, opacity: 0, duration: 1},0)
                .to(Bgtrans,{background: 'rgb(56, 5, 5)', duration: 1},0)
                
    
            })
            return ()=> {
                ScrollTrigger.killAll()
                ctx.revert()
            }
        }

    },[completed])

    return (
        <section>
            <div className={`${styles.contactme} ContactSection`}>

                <div className={`${styles.Cwaves} ${styles.Cwavetop0} Bgtrans`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwavetop1}`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwavetop2}`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwavetop3}`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwavetop4}`}></div>

                <div className={`${styles.contactformbox}`}>
                    <div className={`${styles.heading} Contactheading`}>
                        Contact me
                    </div>
                    <div className={`${styles.mail} Mail`}>
                        solofireworks@gmail.com
                    </div>
                </div>
                
                <div className={`${styles.Cwaves} ${styles.Cwave0}`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwave1}`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwave2}`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwave3}`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwave4}`}></div>
            </div>
        </section>
    )
}