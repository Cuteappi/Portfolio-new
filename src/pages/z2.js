import Head from 'next/head'
import Homepage from '@/components/old/Homepage/Homepage'
import { useEffect } from 'react'
import { animations } from '@/lib/animations.jsx'

export default function Home(props) {
    useEffect(()=>{
        props.handleSetSates(props.animation, 'rgb(255, 85, 85)')
    })

    
    return (
        <>

            <Head>
                <title>Home</title>
                <meta name="description" content="Here you will some info about me" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />S
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