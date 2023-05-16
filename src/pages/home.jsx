import Head from 'next/head'
import Homepage from '@/components/Homepage/Homepage'
//import { useEffect } from 'react'
import { animations } from '@/lib/animations.jsx'

export default function Home(props) {
    props.setanim(props.animation)
    props.setbg('rgb(255, 85, 85)')
    
    return (
        <>

            <Head>
                <title>Home</title>
                <meta name="description" content="Here you will some info about me" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Homepage />
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: { animation: animations[1] }
    };
}