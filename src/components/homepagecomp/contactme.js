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

            const ctx = gsap.context(()=>{
    
                    // const t1 = gsap.timeline({
                    //     scrollTrigger:{
                    //         trigger: Projectref.current,
                    //         start: 'top top',
                    //         end: 'bottom top',
                    //         pin: true,
                    //         //pinSpacing: false,
                    //         scrub: 0.5,
                    //     }
                    // })
                    // t1.from(heading,{ y: 100, opacity: 0})
                    // .from(center,{
                    //     scale: 0.5,
                    //     opacity: 0,
                    //     y: 100,
                    //     stagger: {
                    //         each: 0.1,
                    //         from: "center",
                    //         grid: "auto",
                    //         ease: Power2.inOut,
                    //     }
                    // })
    
            })
            return ()=> {
                ScrollTrigger.killAll()
                ctx.revert()
            }
        }
        //const heading = Projectref.current.querySelectorAll(`.${styles.projects__title}`)

    },[completed])

    return (
        <section>
            <div className={`${styles.contactme}`}>
                Contact me
            </div>
        </section>
    )
}