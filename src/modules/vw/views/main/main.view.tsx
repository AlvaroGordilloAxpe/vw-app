import styles from './main.module.css'
import cn from 'classnames'
import * as Card from '@/common/components/ui/card'
import { Button } from '@/common/components/ui/button'
import Link from 'next/link'

export function VWMainView() {
    return (
        <div
            data-testid="vw-main-view"
            className={cn(styles.container, 'flex justify-center items-center')}
        >
            <Card.Root className="w-1/4 bg-neutral-50 shadow-xl shadow-slate-900/30">
                <Card.Header>
                    <Card.Title>Main Menu</Card.Title>
                    <Card.Description>
                        Please, select an option
                    </Card.Description>
                </Card.Header>
                <Card.Content className="flex flex-col gap-8">
                    <Button size="lg" className="tracking-widest text-lg">
                        <Link href="/vw/documents-list">Documents List</Link>
                    </Button>

                    <Button size="lg" className="tracking-widest text-lg">
                        <Link href="/vw/analytics">Analytics</Link>
                    </Button>

                    <Button size="lg" className="tracking-widest text-lg">
                        <Link href="/vw/searches">Search Data</Link>
                    </Button>
                </Card.Content>
            </Card.Root>
        </div>
    )
}
