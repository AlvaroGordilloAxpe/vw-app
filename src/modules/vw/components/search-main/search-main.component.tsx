import styles from './search-main.module.css'
import cn from 'classnames'
import * as Card from '@/common/components/ui/card'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { VWSearchFormComponent } from '@/vw/components/search-form'
import { VWSearchResultsComponent } from '@/vw/components/search-results'

export function VWSearchMainComponent() {
    return (
        <div
            data-testid="vw-search-main-component"
            className={cn(styles.container, 'flex justify-center items-center')}
        >
            <Card.Root className="w-[80vw] h-[85vh] bg-neutral-50 shadow-xl shadow-slate-900/30">
                <Card.Header className="flex flex-row justify-between">
                    <div>
                        <Card.Title className="text-2xl">
                            Search Data View
                        </Card.Title>
                        <Card.Description>
                            View about searching data and its results.
                        </Card.Description>
                    </div>
                </Card.Header>
                <Card.Content className="flex flex-row gap-x-8">
                    <ScrollArea className="basis-1/5">
                        <VWSearchFormComponent
                            onSubmit={async (fields) => {
                                try {
                                    console.log('Fields', fields)
                                } catch (e: any) {
                                    console.log('error aaaaaa', e)
                                    return 'Invalid credentials'
                                }
                            }}
                        />
                    </ScrollArea>
                    <ScrollArea className="basis-4/5">
                        <VWSearchResultsComponent />
                    </ScrollArea>
                </Card.Content>
            </Card.Root>
        </div>
    )
}