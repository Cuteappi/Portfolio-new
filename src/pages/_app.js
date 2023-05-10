import '@/styles/globals.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
    const router = useRouter()
    return (
        <AnimatePresence mode='wait' initial={false} onExitComplete={()=>{console.log('exit completed')}}>
            <motion.div
                key={router.route}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                    duration: 0.75,
                }}
                variants={{
                    initialState: {
                    opacity: 0,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    },
                    animateState: {
                    opacity: 1,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    },
                    exitState: {
                    opacity: 0,
                    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                    },
                }}
                style={{width: '100%', minHeight: '100vh'}}
            >
                <Component {...pageProps} />
            </motion.div>
            </AnimatePresence>
    )
}
