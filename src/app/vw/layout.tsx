import '../../styles/main.css'
import { PropsWithChildren } from 'react'
import { VWMainLayout } from '@/vw/layouts/main'

export const metadata = {
    title: 'VW APP',
    description: 'VW Application POC',
}

export default function Layout(props: PropsWithChildren) {
    return <VWMainLayout>{props.children}</VWMainLayout>
}
