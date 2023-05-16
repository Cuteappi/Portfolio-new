import Starterpage from '@/components/Starterpage/Starterpage.jsx'
import Textani from '@/components/Starterpage/textani.jsx'
import Dots from '@/components/Starterpage/Dots.jsx'
//import { usestate } from 'react'
import { animations } from '@/lib/animations.jsx'

import Head from 'next/head'

export default function Welcome(props) {
    
    props.setanim(props.animation)
    props.setbg('rgb(255, 85, 85)')

    return (
        <>
            <Head>
                <title>Welcome</title>
                <meta name="description" content="Welcome To my portfolio page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="src/public/favicon.ico" type="image/icon/" />
            </Head>

            <Starterpage>
                <Textani word ={props.randomWord}/>
                <Dots numdots={3} />
            </Starterpage>
        </>
    )
}

export async function getServerSideProps(context) {
    const wordList = ['Konnichiwa', 'Hello', 'Bonjour', 'Guten', 'Ciao', 'Ola', 'Marhaba', 'Nǐn hǎo']

    const randomWord = wordList[Math.floor(Math.random() * wordList.length)]

    return {
        props: { randomWord , animation: animations[0] }
    };
}