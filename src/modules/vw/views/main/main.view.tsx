import styles from './main.module.css'
import cn from 'classnames'
import * as Card from '@/common/components/ui/card'
import { Button } from '@/common/components/ui/button'

export function VWMainView() {
    return (
        <div
            data-testid="vw-main-view"
            className={cn(
                styles.container,
                'bg-neutral-200 flex justify-center items-center'
            )}
        >
            <Card.Root className="w-1/4 min-h-[30vh] bg-neutral-50">
                <Card.Header>
                    <Card.Title>Main Menu</Card.Title>
                    <Card.Description>
                        Please, select an option
                    </Card.Description>
                </Card.Header>
                <Card.Content className="flex flex-col gap-8">
                    <Button size="lg" className="tracking-widest text-lg">
                        Document List
                    </Button>
                    <Button size="lg" className="tracking-widest text-lg">
                        Analitycs
                    </Button>

                    <Button size="lg" className="tracking-widest text-lg">
                        Search Data
                    </Button>
                    <Button size="lg" className="tracking-widest text-lg">
                        Administration
                    </Button>
                </Card.Content>
            </Card.Root>
        </div>
    )
}
