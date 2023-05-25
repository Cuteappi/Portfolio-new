import styles from './scss/projects.module.scss'
import { useEffect, useContext } from 'react'
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

            const Project = MainSec.current.querySelector(`.ProjectSection`)
            const heading = MainSec.current.querySelector(`.Projectheading`)
            const Container = MainSec.current.querySelector(`.ProjectContainer`)
            const Info = MainSec.current.querySelector(`.InfoHolder`)
            const Pics = MainSec.current.querySelector(`.PicHolder`)
            const Theinfo = MainSec.current.querySelector(`.Theinfo`)
            const Images = MainSec.current.querySelectorAll(`.Image`)
            const Text =  MainSec.current.querySelectorAll(`.text`)


            const ctx = gsap.context(()=>{
    
                const t1 = gsap.timeline({
                    scrollTrigger:{
                        trigger: Project,
                        start: 'top top',
                        end: '+=5000px',
                        pin: true,
                        anticipatePin: 1,
                        scrub: 1.5,
                    }
                })
                
                t1.from(heading,{ y: -100, opacity: 0, duration: 0.5})
                .from(Container,{y: 300, opacity: 0, duration: 1},0.35)
                .from(Info,{x: -600, duration: 1},0.35)
                .from(Pics,{x: 1500, duration: 1},0.35)

                .to(Text,{xPercent: -110, opacity: 0, duration: 0.5, stagger: 0.1},2)
                .to(Theinfo,{yPercent: -100, duration: 0.5},2.5)
                .to(Text,{xPercent: 0, opacity: 1, duration: 0.5, stagger: 0.1},2.75)
                .to(Images[0],{opacity: 0, duration: 1.5},2)
                .fromTo(Images[1],{opacity:0},{xPercent: -100, opacity: 1, duration: 1.5},2)

                .to(heading,{ y: -100, opacity: 0, duration: 0.5},4.75)
                .to(Container,{y: -300, opacity: 0, duration: 2},5)
                .to(Info,{x: -600, duration: 2},5)
                .to(Pics,{x: 1500, duration: 2},5)

    
            })
            return ()=> {
                ScrollTrigger.killAll()
                ctx.revert()
            }
        }

    },[completed])

    return (
        <section className={`${styles.projects} ProjectSection`}>
            <h1 className={`${styles.projects__title} Projectheading`}>Projects</h1>
            <div className={`${styles.projects__container} ProjectContainer`}>
                <div className={`${styles.projects__container__info} InfoHolder`}>
                    <div className={`${styles.projects__container__info__flex} Theinfo`}>

                        <div className={`${styles.projects__container__info__flex__1} ${styles.projects__container__info__size} `}>
                            <h1 className='text'>Personal Portfolio</h1>
                            <div className='text'>Made using Nextjs</div>
                        </div>

                        <div className={`${styles.projects__container__info__flex__2} ${styles.projects__container__info__size}`}>
                            <h1 className='text'>Food Ordering E-commerce website</h1>
                            <div className='text'>Made using Nodejs, Mongodb</div>
                            <p className='text'>A complete E-commerce website that uses Razorpay Api for <b>Transactions</b> and Session management</p>
                        </div>
                    </div>

                </div>
                <div className={`${styles.projects__container__pics} PicHolder`}>
                    <img src='/images/portfolio.jpg' className={`${styles.projects__container__pics__img} Image`}/>
                    <img src='/images/food.jpg' className={`${styles.projects__container__pics__img} Image`}/>
                </div>
            </div>
            
        </section>
    )
}
