import { useEffect } from 'react'
import { useAnimate, cubicBezier, motion } from 'framer-motion'
import styles from './dotani.module.scss'

export default function Dots({numdots}){
    const [scope, animate] = useAnimate();

    function createdots(){
        const dots = []

        for (let i = 0; i < numdots; i++) {
            dots.push(<motion.div 
                className={styles.dot}
                variants={dotcount}
                transition={trans}
                key={i} 
                ></motion.div>)
        }
        return dots
    }

    useEffect(() =>{
        const dotini = [
            [scope.current,{opacity: [0,1], y:[-100,0]}, {delay: 3.5, ease: cubicBezier( 0.06, 0.48, 0.32, 0.91 )}]
        ]
        
        animate(dotini)
    })

    const trans = {
        duration: 0.5, 
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
    }

    const dotcount = {
        start: {
            y: '0%',
            opacity: 1,
        },
        end:{
            y: '-100%',
            opacity: 0.8,
        }
    }
    const dotani ={
        start: {
            transition: {
              staggerChildren: 0.2,
            },
          },
          end: {
            transition: {
              staggerChildren: 0.2,
            },
          }
    }

    return (
        <motion.div className={styles.dot_container}
            initial='start'
            animate='end'
            variants={dotani}
            ref={scope}
        >
            {createdots()}
        </motion.div>
    )
}