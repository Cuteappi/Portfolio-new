'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import styles from './Starterpage.module.scss'

export default function Starterpage({children}) {

    const { push } = useRouter();
    const scope = useRef()
    const main = useRef()

    const [eventstate, seteventstate] = useState(false)
     
    var Height = 0
    useEffect(()=>{

        var bg = scope.current.querySelector(`.${styles.back}`)
        var loadingBar = scope.current.querySelector(`.${styles.loader}`)

        main.current.addEventListener("scroll", (e) => {

            var scrollPercent = (main.current.scrollTop) * 100 / (scope.current.clientHeight - window.innerHeight);

            if(scrollPercent < 75){
                loadingBar.style.transform = `translateY(-${ 100-(scrollPercent *1.334) }%)`
                loadingBar.style.clipPath = `polygon(75% 0, 76.5% 0, 76.5% 100%, 75% 100%)`

            }else{
                loadingBar.style.transform = `translateY(0%)`
                loadingBar.style.clipPath = `polygon( 
                    ${75-(((scrollPercent-75)/25)*75)}% 0,
                    ${76.5+(((scrollPercent-75)/25)*23.5)}% 0,
                    ${76.5+(((scrollPercent-75)/25)*23.5)}% 100%,
                    ${75-(((scrollPercent-75)/25)*75)}% 100%
                )`
            }

            if(scrollPercent >= 100){
                seteventstate(true)
                setTimeout(() => {
                    push('/home')
                },2000)
            }
        })

        document.addEventListener("mousemove", (e) => {

            var mouseX = (e.clientX)/75;
            var mouseY = (e.clientY)/50;

            if (scope.current !=null){

                if(Height >= 100 && Height <= 100.1){
                    seteventstate(true)
                    setTimeout(() => {
                        push('/home')
                    },100)
                }

                
                bg.style.backgroundPosition = `${mouseX}% ${mouseY}%`;

            }            
        })

        document.addEventListener("touchstart", (e) => {
            e.preventDefault();
        })

        document.addEventListener("touchmove", (e) => {
            e.preventDefault();
            [...e.changedTouches].forEach(touch =>{

                var mouseX = (touch.clientX)/20;
                var mouseY = (touch.clientY)/20;

                if (scope.current !=null){

                    if(Height >= 50 && Height <= 50.5){
                        animate(ani50)
                    }

                    if(Height >= 100 && Height <= 100.5){
                        animate(ani100)
                        seteventstate(true)
                        setTimeout(() => {
                            push('/home')
                        },1000)
                    }

                    bg.style.backgroundPosition = `${mouseX}% ${mouseY}%`;
                }
            })            
        })

        document.addEventListener("touchend", (e) => {
            e.preventDefault();
        })

        if(eventstate){
            document.removeEventListener("mousemove", () => {console.log('mouse event removed')})
            document.removeEventListener("touchmove", () => {console.log('touch event removed')})
        }
        
    },[])

    return (
        <>

            <div className={styles.mainBg} ref={main}>
                <div className={styles.bg} ref={scope}>
                    <div className={styles.back}></div>
                    <div className={styles.loader}></div>

                    <div className={styles.welcome}>
                        {children}
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}