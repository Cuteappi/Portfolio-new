'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import styles from './Starterpage.module.scss'

export default function Starterpage({children}) {

    const { push } = useRouter();
    const scope = useRef()
    const main = useRef()

    const [eventstate, seteventstate] = useState(false)

    useEffect(()=>{

        var bg = scope.current.querySelector(`.${styles.back}`)
        var loadingBar = scope.current.querySelector(`.${styles.loader}`)




        
        function throttle(cb, delay) {
            let wait = false;
            let storedArgs = null;
          
            function checkStoredArgs () {
              if (storedArgs == null) {
                wait = false;
              } else {
                cb(...storedArgs);
                storedArgs = null;
                setTimeout(checkStoredArgs, delay);
              }
            }
          
            return (...args) => {
              if (wait) {
                storedArgs = args;
                return;
              }
          
              cb(...args);
              wait = true;
              setTimeout(checkStoredArgs, delay);
            }
        }

        const moves = throttle((e) => {
            var mouseX = (e.clientX)/75;
            var mouseY = (e.clientY)/50;

            bg.style.backgroundPosition = `${mouseX}% ${mouseY}%`;            
        },5)

        const touchmoves = throttle((touch) => {
            var mouseX = (touch.clientX)/25;
            var mouseY = (touch.clientY)/25;

            bg.style.backgroundPosition = `${mouseX}% ${mouseY}%`;            
        },2)

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
                },1000)
            }
        })

        document.addEventListener("mousemove", (e) => {
            moves(e)           
        })

        document.addEventListener("touchstart", (e) => {
            //e.preventDefault()
            console.log('touch')
        },{passive:false})

        document.addEventListener("touchmove", (e) => {
            [...e.changedTouches].forEach(touch =>{
                touchmoves(touch)
            })            
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