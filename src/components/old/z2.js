import Head from 'next/head'
import Homepage from '@/components/old/Homepage/Homepage'



export default function Home(props) {    
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