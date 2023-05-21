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

        const moves = (e) => {
            var mouseX = (e.clientX)/75;
            var mouseY = (e.clientY)/50;
            bg.style.backgroundPosition = `${mouseX}% ${mouseY}%`;            
        }

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

        main.current.addEventListener("mousemove", (e) => {
            moves(e)           
        })

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