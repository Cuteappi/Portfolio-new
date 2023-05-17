'use client'
import Link from 'next/link'
import styles from './Homepage.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef, useEffect } from 'react'
import { easeInOut } from 'framer-motion'


export default function Homepage() {
    gsap.registerPlugin(ScrollTrigger)

    const navRef = useRef()
    const Maindiv = useRef() 
    const ProRef = useRef()
    
    function handleProjectScrolTo(){
        window.scrollTo(0, 1100)
    }

    function handleTopScrollTo(){
        window.scrollTo(0, 0)
    }

    useEffect(()=>{
        navRef.current.style.opacity = 0
        const ctx = gsap.context(() => {

            setTimeout(()=>{
                navRef.current.style.opacity = 1
                gsap.fromTo(navRef.current.children,{ y:-100 },{ y:0 , ease: easeInOut, stagger: 0.1 })
            
                gsap.to(navRef.current,{ opacity: 1 })

                
                gsap.to(navRef.current,{
                    opacity: 0,
                    duration: 0.5,
                    scrollTrigger:{
                        trigger: Maindiv.current,
                        start: 'top top',
                        end: 'end 100%',
                        scrub: 0.5
                    }
                })

                gsap.fromTo(navRef.current.children,{ y:0 },{ y: -100 , ease: easeInOut, stagger: 0.1,
                    scrollTrigger:{
                        trigger: Maindiv.current,
                        start: 'top top',
                        end: 'end 100%',
                        scrub: 0.5
                    }
                })

                gsap.fromTo(navRef.current.children,{ y:-100 },{y:0 , ease: easeInOut, stagger: 0.1, duration: 2,
                    scrollTrigger:{
                        trigger: ProRef.current,
                        start: 'top 1%',
                        end: 'end 100%',
                        scrub: 0.5,
                    }
                })

                gsap.fromTo(navRef.current,{
                    opacity: 0,
                    color: "rgb(0, 0, 0)"
                },{
                    opacity: 1,
                    duration: 0.5,
                    color: "rgb(255, 255, 255)",
                    scrollTrigger:{
                        trigger: ProRef.current,
                        start: 'top 1%',
                        end: 'end 100%',
                        scrub: 0.5
                    }
                })
            },800)
            
        })
        return ()=>{
            ctx.revert()
        }
    })
  return (
    <>  
        <div className={styles.ul} ref={navRef}>

            <Link href='/' className={`${styles.links} ${styles.links0}`}>SOLO</Link>

            <div className={`${styles.links} ${styles.links1}`} onClick={handleTopScrollTo}>HOME</div>

            <div className={`${styles.links} ${styles.links2}`} onClick={handleProjectScrolTo}>PROJECTS</div>

            <div className={`${styles.links} ${styles.links3}`} >CONTACT</div>

        </div>

        <div className={styles.Main} >
            <section
                ref={Maindiv}
                className={styles.about_section}
            >
                <div className={styles.name}>
                    <h1>Hello,</h1>
                    <h1>my name is Solomon</h1>
                    <div className={styles.about_me}>
                        <span className={styles.span}>I am a full Stack Developer focused on</span>
                        <span className={styles.span}>creating beautiful web designs</span>
                    </div>
                </div>

                <div className={styles.my_redirects}>

                    <div className={`${styles.instagram} ${styles.hoverstate}`}>
                        <a href='https://www.instagram.com/hmm.meh_/' target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" id='instagram'></i></a>
                    </div>
                    <div className={`${styles.github} ${styles.hoverstate}`}>
                        <a href='https://github.com/Cuteappi' target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                    </div>
                    <div className={`${styles.linkedin} ${styles.hoverstate}`}>
                    <a href='https://www.linkedin.com/in/solomon-undefined-837b9a24b/' target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </section>

            <section className={styles.projects} ref={ProRef}>
                <div className={styles.projects_part}>hello</div>
            </section>
        </div>
    </>
  )
}
