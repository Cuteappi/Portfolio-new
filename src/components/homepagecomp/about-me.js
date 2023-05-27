import React from 'react'
import styles from './scss/about.module.scss'
import { useEffect, useContext, useRef, useState } from 'react'
import { HomeContext } from '@/contexts/HomeContext'
import { TransitionContext } from '@/contexts/TransitionContext'
import { gsap }  from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function aboutMe() {
    const { completed } = useContext(TransitionContext)
    const { MainSec } = useContext(HomeContext)
    const backstory = useRef()
    const [backstoryState, setbackstoryState] = useState(false)

    function handleClickAbout(){
        setbackstoryState(true)
    }

    function handleClickCross(){
        setbackstoryState(false)
    }

    useEffect(()=>{
        console.log(backstoryState)
        const el = backstory.current.querySelector('.Backstory')

        if(backstoryState){
            gsap.to(el,{xPercent: -100, opacity: 1})
        }else{
            gsap.to(el,{xPercent: 100, opacity: 0})
        }

    },[backstoryState])

    useEffect(() =>{
        if (!completed.state) return
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
                        anticipatePin: 1,
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
            <div className={`${styles.about}`} ref={backstory}>
                <button className={`${styles.about_word}`} onClick={handleClickAbout}>
                    ABOUT ME
                </button>
                
                <div className={`${styles.about_Past} Backstory`}>
                    <div className={`${styles.about_Past_cross}`} onClick={handleClickCross}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="50px" height="50px" viewBox="0 0 32 32">
                            <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"/>
                        </svg>
                    </div>
                    Welcome to my portfolio page! Here, you will discover a showcase of my skills, experiences, and creative endeavors. I am [Your Name], a passionate [profession/field] with a dedication to [describe your area of expertise or interest].

                    Throughout my journey, I have honed my skills and acquired a diverse range of experiences that have shaped me into the professional I am today. My portfolio serves as a testament to my dedication, creativity, and ability to deliver exceptional results.

                    In this space, you will find a collection of my best work, demonstrating my proficiency in [list key skills or areas of expertise]. From [mention specific projects, achievements, or collaborations], each piece embodies my unwavering commitment to quality and innovation.

                    I believe that every project presents an opportunity for growth and learning, and I approach each endeavor with an open mind, a passion for excellence, and a determination to exceed expectations. With a keen eye for detail and a strong understanding of [mention relevant tools or technologies], I strive to deliver impactful solutions that leave a lasting impression.

                    Feel free to explore my portfolio and immerse yourself in the world of my creations. Whether you are a potential client, collaborator, or simply someone interested in my work, I hope you find inspiration and discover the unique perspective I bring to each project.

                    Thank you for visiting, and I look forward to connecting with you soon to discuss how I can contribute to your next venture.
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
