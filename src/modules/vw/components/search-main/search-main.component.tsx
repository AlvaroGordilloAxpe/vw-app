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
            <Card.Root className="w-[80vw] h-[80vh] bg-neutral-50 shadow-xl shadow-slate-900/30">
                <Card.Header className="flex flex-row justify-between">
                    <div>
                        <Card.Title className="text-2xl">
                            sdfgsghsd gsdfgsd
                        </Card.Title>
                        <Card.Description>
                            afgsdgsdhsdgsdgsdgdsgsdgsdgsdgsdb.
                        </Card.Description>
                    </div>
                </Card.Header>
                <Card.Content className="flex flex-row">
                    <ScrollArea className="basis-1/3">
                        <VWSearchFormComponent />
                    </ScrollArea>
                    <ScrollArea className="basis-2/3 divide-x-2">
                        <VWSearchResultsComponent />
                    </ScrollArea>
                </Card.Content>
            </Card.Root>
        </div>
    )
}
