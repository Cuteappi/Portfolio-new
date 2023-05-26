import styles from './scss/contact.module.scss'
import { useEffect, useContext } from 'react'
import { TransitionContext } from '@/contexts/TransitionContext'
import { HomeContext } from '@/contexts/HomeContext'
import { gsap }  from 'gsap'
import { Back } from "gsap";
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
            const cwaves = MainSec.current.querySelectorAll(`.Cwavestop`)
            const waves = MainSec.current.querySelectorAll(`.Cwaves`)

            function random(){
                const arr = [1, 2, 3, 4, -1, -2, -3, -4]
                const randomIndex = Math.floor(Math.random() * arr.length);
                return `${arr[randomIndex]}vh`
            }

            const ctx = gsap.context(()=>{

                const tl = gsap.timeline({repeat: -1, yoyo: true})
                tl
                .to(cwaves[0],{ y: random, duration: 5, ease: 'power1.easeInOut'},0)
                .to(cwaves[1],{ y: random, duration: 5, ease: 'power1.easeInOut'},0.1)
                .to(cwaves[2],{ y: random, duration: 5, ease: 'power1.easeInOut'},0.3)
                .to(cwaves[3],{ y: random, duration: 5, ease: 'power1.easeInOut'},0.2)
                .to(cwaves[4],{ y: random, duration: 5, ease: 'power1.easeInOut'},0.4)
                
                .to(waves[0],{ y: random, duration: 5, ease: 'power1.easeInOut'},0)
                .to(waves[1],{ y: random, duration: 5, ease: 'power1.easeInOut'},0.1)
                .to(waves[2],{ y: random, duration: 5, ease: 'power1.easeInOut'},0.3)
                .to(waves[3],{ y: random, duration: 5, ease: 'power1.easeInOut'},0.2)
                .to(waves[4],{ y: random, duration: 5, ease: 'power1.easeInOut'},0.4)

    
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

                <div className={`${styles.Cwaves} ${styles.Cwavetop0} Cwavestop Bgtrans`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwavetop1} Cwavestop`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwavetop2} Cwavestop`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwavetop3} Cwavestop`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwavetop4} Cwavestop`}></div>

                <div className={`${styles.contactformbox}`}>
                    <div className={`${styles.heading} Contactheading`}>
                        Contact me
                    </div>
                    <div className={`${styles.mail} Mail`}>
                        solofireworks@gmail.com
                    </div>
                </div>
                
                <div className={`${styles.Cwaves} ${styles.Cwave0} Cwaves`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwave1} Cwaves`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwave2} Cwaves`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwave3} Cwaves`}></div>
                <div className={`${styles.Cwaves} ${styles.Cwave4} Cwaves`}></div>
            </div>
        </section>
    )
}