import '@/styles/globals.scss'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { useRouter } from "next/router";
import { useState } from 'react';

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const [anim, setanim]=useState()
    const [bg, setbg]=useState()

    return (
        <LazyMotion features={domAnimation}>
            <style jsx global>
                    {`body{
                        background-color:${bg};
                        transition: background-color 750ms ease-out;
                    }`}
                </style>
            <AnimatePresence mode='wait'>
                <m.div
                className='pgdiv'
                    key={router.route}
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        duration: 0.75,
                    }}
                    variants={anim}
                    
                >
                    <Component {...pageProps} setanim={setanim} setbg={setbg}/>
                </m.div>
            </AnimatePresence>
        </LazyMotion>
    )
}
