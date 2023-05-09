import { useEffect } from 'react'
import { stagger, useAnimate, cubicBezier } from 'framer-motion'
import styles from './textani.module.scss'

export default function Textani({ word }) {
    const [scope, animate] = useAnimate();
    
    let letters = word.split('')

    useEffect(() =>{
        const textani = [
            [`.${styles.child}`,{ x:0 }, { delay: 0.5 }],

            [`.${styles.child}`,{ y: [320,0], opacity: [0.5,1], color: '#ee7752' }, 
                {
                    duration: 0.5,
                    ease: cubicBezier( 0.06, 0.48, 0.32, 0.91 ),
                    delay: stagger(-0.02)
                }
            ],

            [`.${styles.child}`,{x:0, scale:[1.1,0.98,1],},
                { 
                    duration: 0.5, 
                    ease: cubicBezier( 0.06, 0.48, 0.32, 0.91 ), 
                    delay: 0.1
                }
            ],

            [`.${styles.child}`,{x:0}, {delay: 1}],
            [`.${styles.child}`,{y: [0,320], opacity: 0}, 
                {
                    duration: 0.5, 
                    ease: cubicBezier( 0.48, 0.06, 0.91, 0.32 ),
                    delay: stagger(0.05),
                    
                }
            ],
            [`.${styles.child}`,{color: ['#ee7752', '#e73c7e', '#23a6d5']},{at:0.5, duration: 4}]
        ]
        animate(textani)
    })

    return (
        
        <div className={styles.text_container} ref={scope}>
            {letters.map((letter, index) => {
                return <div className={styles.child} key={index}>{letter}</div>
            })}
        </div>
        
    )
}

