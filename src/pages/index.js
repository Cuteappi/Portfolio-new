import Link from 'next/link'

export default function Index() {
    return (
        <div style={{minHeight: '100vh', minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgb(0, 0, 0)'}}>
            <Link href='/home' >HOME</Link>
        </div>
        
    )
}
