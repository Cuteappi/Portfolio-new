import styles from './scss/projects.module.scss'
import { useEffect, useContext, useRef } from 'react'
import { TransitionContext } from '@/contexts/TransitionContext'
import { HomeContext } from '@/contexts/HomeContext'
import { gsap }  from 'gsap'
import { Power2 } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
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
        <section className={styles.projects}>
            <h1 className={`${styles.projects__title} Projectheading`}>Projects</h1>
            <div className={`${styles.projects__container} Projectheading`}>
                <div className={`${styles.projects__container__info} InfoHolder`}>
                    <div className={`${styles.projects__container__info__1} ${styles.projects__container__info__size}`}>
                        <h1>Personal Portfolio</h1>
                    </div>

                    <div className={`${styles.projects__container__info__1} ${styles.projects__container__info__size}`}>
                        <h1>Food Ordering</h1>
                        <h1>E-commerce website</h1>
                    </div>

                </div>
                <div className={`${styles.projects__container__pics} PicHolder`}>
                    <img src='/images/portfolio.png' className={styles.projects__container__pics__img}/>
                    <img src='/images/foodOrderingSystem.png' className={styles.projects__container__pics__img}/>
                </div>
            </div>
            
        </section>
    )
}
