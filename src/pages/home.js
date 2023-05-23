import Homepage from '@/components/homepagecomp/homepage'
import { HomeProvider } from '@/contexts/HomeContext'

export default function home() {
    return (
        <HomeProvider>
            <Homepage />
        </HomeProvider>
    )
}
