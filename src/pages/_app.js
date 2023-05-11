import '@/styles/globals.scss'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { useRouter } from "next/router";
import { useState } from 'react';
import { animations } from '@/lib/animations.jsx'

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const [anim, setanim]=useState()

    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence mode='wait'>
                <m.div
                    key={router.route}
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        duration: 0.75,
                    }}
                    variants={anim}
                    style={{width: '100%', minHeight: '100vh'}}
                >
                    <Component {...pageProps} setanim={setanim}/>
                </m.div>
            </AnimatePresence>
        </LazyMotion>
    )
}
