import styles from './/carasole.module.scss'
import { useEffect, useContext, useRef, useState } from 'react'
//import { HomeContext } from '@/contexts/HomeContext'
import { gsap }  from 'gsap'
import { ScrollToPlugin} from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export default function Carasole() {

    //const { MainSec } = useContext(HomeContext)
    const backstory = useRef()

    useEffect(()=>{
        const el = backstory.current.querySelector('.Backstory')
        const Word = backstory.current.querySelector('.Word')
        const Cross = backstory.current.querySelector('.Cross')
        const Button = backstory.current.querySelectorAll('.Button')      
        const Container = backstory.current.querySelector('.Container')
        const Sec = backstory.current.querySelector('.Sec')

        let isDown = false;
        let startX, walk, scrollLeft;

            gsap.fromTo(Button[0],{background: 'rgba(255, 85, 85, 0.244)'},{background: 'rgba(255, 255, 255, 0.788)', duration: 1, ease:'power4.out'},0)
            //gsap.to(el,{autoAlpha: 1})


        Word.addEventListener('click', ()=>{
            const ctx = gsap.context(()=>{
                const x = gsap.timeline()
                x.to(el,{x: 0, opacity: 1, duration: 0.5, display: 'block'},0)
                .to(el,{backdropFilter: 'blur(40px)', duration: 2},0.4)
            })
            return ()=> ctx.revert()
        })

        Cross.addEventListener('click', ()=>{
            const ctx = gsap.context(()=>{
                const x = gsap.timeline()
                x.to(el,{backdropFilter: 'blur(10px)', duration: 2},0)
                .to(el,{x: '100dvw', opacity: 0, display: 'none'},0.2)
            })
            return ()=> ctx.revert()
        })

        Button[0].addEventListener('click', ()=>{
            const ctx = gsap.context(()=>{
                const t1 = gsap.timeline()
                t1.to(Sec,{scrollTo: {x: 0}, ease:'power4.out'},0)
                .fromTo(Button[0],{background: 'rgba(255, 85, 85, 0.244)'},{background: 'rgba(255, 255, 255, 0.788)', duration: 1, ease:'power4.out'},0)
                .fromTo(Button[1],{background: 'rgba(255, 85, 85, 0.244)'},{background: 'rgba(255, 85, 85, 0.244)', duration: 1, ease:'power4.out'},0)

            })
            return ()=> ctx.revert()
        })
        Button[1].addEventListener('click', ()=>{
            let limit = Sec.offsetWidth;
            const ctx = gsap.context(()=>{
                const t1 = gsap.timeline()
                t1.to(Sec,{scrollTo: {x: limit}, ease:'power4.out'},0)
                .fromTo(Button[1],{background: 'rgba(255, 85, 85, 0.244)'},{background: 'rgba(255, 255, 255, 0.788)', duration: 1, ease:'power4.out'},0)
                .fromTo(Button[0],{background: 'rgba(255, 85, 85, 0.244)'},{background: 'rgba(255, 85, 85, 0.244)', duration: 1, ease:'power4.out'},0)

            })
            return ()=> ctx.revert()
        })

        const dragstart = (e)=>{
            isDown = true
            startX = (e.pageX || e.touches[0].pageX) - Container.offsetLeft
            scrollLeft = Sec.scrollLeft
        }

        const dragmove = (e)=>{
            if(!isDown) return;
            e.preventDefault();
            const x = (e.pageX || e.touches[0].pageX) - Container.offsetLeft
            walk = (x - startX)
            Sec.scrollLeft = scrollLeft - walk 
        }

        const dragend = (e)=>{
            isDown = false
            let limit = Sec.offsetWidth;
            if(Sec.scrollLeft > limit/2){
                const ctx = gsap.context(()=>{
                    const t1 = gsap.timeline()
                    t1.to(Sec,{scrollTo: {x: limit}, delay: 0.1, duration: 1, ease:'power4.out'},0)
                    .fromTo(Button[1],{background: 'rgba(255, 85, 85, 0.244)'},{background: 'rgba(255, 255, 255, 0.788)', ease:'power4.out'},0)
                    .fromTo(Button[0],{background: 'rgba(255, 85, 85, 0.244)'},{background: 'rgba(255, 85, 85, 0.244)', ease:'power4.out'},0)
                })
                return ()=> ctx.revert() 

            }else if(Sec.scrollLeft < limit/2){
                const ctx = gsap.context(()=>{
                    const t1 = gsap.timeline()
                    t1.to(Sec,{scrollTo: {x: 0}, delay: 0.1, duration: 1, ease:'power4.out'},0)
                    .fromTo(Button[0],{background: 'rgba(255, 85, 85, 0.244)'},{background: 'rgba(255, 255, 255, 0.788)', ease:'power4.out'},0)
                    .fromTo(Button[1],{background: 'rgba(255, 85, 85, 0.244)'},{background: 'rgba(255, 85, 85, 0.244)', ease:'power4.out'},0)
                })
                return ()=> ctx.revert() 
            }
        }

        Container.addEventListener('mousedown', dragstart)
        Container.addEventListener('touchstart', dragstart)
        
        Container.addEventListener('mousemove', dragmove)
        Container.addEventListener('touchmove', dragmove)
        
        Container.addEventListener('mouseup', dragend)
        Container.addEventListener('touchend', dragend)
        
        Container.addEventListener('mouseleave', () => {
            isDown = false
            let limit = Sec.offsetWidth;
            if(Sec.scrollLeft > limit/2){
                const ctx = gsap.context(()=>{
                    const t1 = gsap.timeline()
                    t1.to(Sec,{scrollTo: {x: limit}, ease:'power4.out'})
                })
                return ()=> ctx.revert() 

            }else if(Sec.scrollLeft < limit/2){
                const ctx = gsap.context(()=>{
                    gsap.to(Sec,{scrollTo: {x: 0}, ease:'power4.out'})
                })
                return ()=> ctx.revert() 
            }
            
        })
    })

    return (
        <div className={`${styles.about}`} ref={backstory}>
            <button className={`${styles.about_word} Word`}>
                ABOUT ME
            </button>
            
            <div className={`${styles.about_Past} Backstory`}>
                <div className={`${styles.about_Past_cross} Cross`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={`${styles.about_Past_cross_svg}`}>
                        <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"/>
                    </svg>
                </div>

                <div className={`${styles.about_Past_section} Sec`}>
                    <div className={`${styles.about_Past_section_container} Container`}>
                        <div className={`${styles.about_Past_section_me}`}>
                            <div className={`${styles.about_Past_section_me_content}`}>

                                <div className={`${styles.line}`}>
                                    <h3 className={`${styles.h3}`}>Welcome to my portfolio page!</h3>
                                </div>

                                <p className={`${styles.p}`}>Here, you will discover a showcase of my skills, experiences, and creative endeavors. I am Solomon, a passionate software developer with a dedication to Web application creation.</p>
                                
                                <p className={`${styles.p}`}>
                                    Throughout my journey, I have honed my skills and acquired a diverse range of experiences that have shaped me into the professional I am today. My portfolio serves as a testament to my dedication, creativity, and ability to deliver exceptional results.
                                    In this space, you will find a collection of my best work.
                                </p>
                            </div>
                            
                            <div className={`${styles.about_Past_section_me_pic}`}>
                                <img alt='me' />
                            </div>
                        </div>

                        <div className={`${styles.about_Past_section_uni}`}>
                            <div className={`${styles.about_Past_section_uni_content}`}>
                                <div className={`${styles.line}`}>
                                    <h3 className={`${styles.h3}`}>Bachelor of Technology in Information Technology <span>(2021 - 2025)</span></h3>
                                </div>

                                <div className={`${styles.p}`}>
                                    I am currently pursuing my Bachelor of Technology degree in Information Technology (IT) from VIT. 
                                    During my academic journey, I acquired a comprehensive set of skills and knowledge in various domains of IT. 
                                </div>

                                <div className={`${styles.p}`}>
                                    <b>Web Development Project:</b><p>Developed a dynamic and responsive website using HTML, CSS, and JavaScript. 
                                    The website showcased my skills in front-end development and included features such as user registration, 
                                    login functionality, and a database backend.</p>
                                </div>

                                <div className={`${styles.p}`}>
                                    <b>Database Management System:</b><p>Designed and implemented a database management system for a fictional company, ensuring efficient data organization, storage, and retrieval. 
                                    Employed SQL queries and normalization techniques to optimize database performance.</p>
                                </div>

                                <div className={`${styles.p}`}>
                                    <b>Information Security Project:</b><p>Conducted a comprehensive analysis of network vulnerabilities and implemented security measures to protect against potential threats. 
                                    Explored various security frameworks, protocols, and encryption techniques to strengthen the network infrastructure.</p>
                                </div>

                            </div>
                            <div className={`${styles.about_Past_section_uni_pic}`}>
                                <img alt='uni pic' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.buttons}`}>
                    <div className={`${styles.buttons_x} Button`}></div>
                    <div className={`${styles.buttons_x} Button`}></div>
                </div> 
            </div>                        
        </div>
    )
}
