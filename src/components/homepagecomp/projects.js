import styles from './scss/projects.module.scss'
import { useEffect, useContext, useRef } from 'react'
import { HomeContext } from '@/contexts/HomeContext'
import { gsap }  from 'gsap'
import { Power2 } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
    const { setProject } = useContext(HomeContext)
    const Projectref = useRef()

    useEffect(() =>{
        setProject(Projectref)
        //const heading = Projectref.current.querySelectorAll(`.${styles.projects__title}`)

        const ctx = gsap.context(()=>{
            setTimeout(() =>{
                ScrollTrigger.refresh()
            },1000)

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

    },[])

    return (
        <section className={styles.projects} ref={Projectref}>
            <h1 className={styles.projects__title}>Projects</h1>
            <div className={styles.projects__1} >
                <img src='/images/portfolio.png' className={styles.projects__1__img}/>
                <h1>Personal Portfolio</h1>
            </div>

            <div className={styles.projects__2}>
                <img src='/images/foodOrderingSystem.png' className={styles.projects__2__img}/>
                <h1>Online food ordering system</h1>
            </div> 
        </section>
    )
}
