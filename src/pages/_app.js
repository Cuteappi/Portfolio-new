import '@/styles/globals.scss'
import TransitionsLayout from '@/assets/TransitionsLayout'
import { TransitionProvider } from '@/contexts/TransitionContext'

export default function App({ Component, pageProps }) {


    return (
        <TransitionProvider>
            <TransitionsLayout>
                <Component {...pageProps} />
            </TransitionsLayout>
        </TransitionProvider>   
    )
}
