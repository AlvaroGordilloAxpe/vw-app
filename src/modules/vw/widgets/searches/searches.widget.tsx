import styles from './searches.module.css'
import cn from 'classnames'
import { usePopulateSearches } from '@/vw/services'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { VWAsideSearchComponent } from '@/vw/components/aside-search'
import { VWMainSearchComponent } from '@/vw/components/main-search'
import { VWProvider } from '@/vw/contexts/vw-context.provider'

export function VWSearchesWidget() {
    const searches = usePopulateSearches()

    return (
        <div
            data-testid="vw-searches-widget"
            className={cn(styles.container, 'grid grid-cols-[15vw_auto]')}
        >
            {!searches.isLoading && (
                <VWProvider>
                    <ScrollArea>
                        <VWAsideSearchComponent />
                    </ScrollArea>
                    <ScrollArea>
                        <VWMainSearchComponent />
                    </ScrollArea>
                </VWProvider>
            )}
        </div>
    )
}
