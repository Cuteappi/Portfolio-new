import Head from 'next/head'
import Homepage from '@/components/Homepage/Homepage'

export default function Home() {
    
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