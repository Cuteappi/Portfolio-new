'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useAnimate, cubicBezier } from 'framer-motion'
import styles from './Starterpage.module.scss'

export default function Starterpage({children}) {

    const { push } = useRouter();
    const [scope, animate]= useAnimate()
     
    var Height = 0
    const ani50 = [
        [`.${styles.loader_50}`, {x: 300, y: 0, opacity:1},{duration:0.5, ease: cubicBezier( 0.06, 0.48, 0.32, 0.91 )}],
        [`.${styles.loader_50}`, {y: -90}, {duration:0.5, delay:0.2, ease: cubicBezier( 0.06, 0.48, 0.32, 0.91 )}],
        [`.${styles.loader_50}`, {y: 0}, {duration:0.5, delay:0.75, ease: cubicBezier( 0.06, 0.48, 0.32, 0.91 )}],
        [`.${styles.loader_50}`, {y: -90}, {duration:0.5, delay:0.5, ease: cubicBezier( 0.06, 0.48, 0.32, 0.91 )}],
        [`.${styles.loader_50}`, {y: -300}, {duration:0.5, delay:1, ease: cubicBezier( 0.06, 0.48, 0.32, 0.91 )}]
    ]

    const ani100= [
        [`.${styles.loader_finish}`,{x: 300, opacity:1},{duration:0.5, ease: cubicBezier( 0.06, 0.48, 0.32, 0.91 )}],
        [`.${styles.loader_holder}`,{y: [0,-500], opacity: [1,0]},{duration:3.5, ease: cubicBezier( 0.06, 0.48, 0.32, 0.91 )}]
    ]
    
    useEffect(() => {

        document.addEventListener("mousemove", (e) => {

            var mouseX = (e.clientX)/50;
            var mouseY = (e.clientY)/50;

            Height = Height + (Math.abs(mouseX) + Math.abs(mouseY))/800

            if (scope.current !=null){

                if(Height >= 50 && Height <= 50.5){
                    animate(ani50)
                }

                if(Height >= 100 && Height <= 100.5){
                    animate(ani100)
                    // document.removeEventListener("pointermove", (e) => {console.log('event removed')})
                    // setTimeout(() => {
                    //     push('/home')
                    // },1.500)
                }

                let bg = scope.current.querySelector(`.${styles.back}`)
                bg.style.backgroundPosition = `${mouseX}% ${mouseY}%`;

                let loadingBar = scope.current.querySelector(`.${styles.loader}`)
                loadingBar.style.transform = `translateY(-${100-Height}%)`
            }            
        })

        document.addEventListener("touchstart", (e) => {
            e.preventDefault();
        })

        document.addEventListener("touchmove", (e) => {
            [...e.changedTouches].forEach(touch =>{

                var mouseX = (touch.clientX)/20;
                var mouseY = (touch.clientY)/20;

                Height = Height + (Math.abs(mouseX) + Math.abs(mouseY))/400

                if (scope.current !=null){

                    if(Height >= 50 && Height <= 50.5){
                        animate(ani50)
                    }

                    if(Height >= 100 && Height <= 100.5){
                        animate(ani100)
                        // document.removeEventListener("pointermove", (e) => {console.log('event removed')})
                        // setTimeout(() => {
                        //     push('/home')
                        // },1.500)
                    }

                    let bg = scope.current.querySelector(`.${styles.back}`)
                    bg.style.backgroundPosition = `${mouseX}% ${mouseY}%`;

                    let loadingBar = scope.current.querySelector(`.${styles.loader}`)
                    loadingBar.style.transform = `translateY(-${100-Height}%)`
                }
            })            
        })
    })

    return (
        <>
            <div className={styles.bg} ref={scope}>
                <div className={styles.back}></div>
                <div className={styles.loader}></div>
                <div className={styles.loader_holder}>
                    <div className={styles.holder_50}>
                        <div className={styles.loader_50}>
                            Your half way there !!!!
                        </div>
                    </div>
                    <div className={styles.loader_finish}>Ready UP!!!</div> 
                </div>

                <div className={styles.welcome}>
                    {children}
                </div>
                
            </div>
            
        </>
    )
}