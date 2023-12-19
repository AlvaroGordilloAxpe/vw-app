import styles from './searches.module.css'
import cn from 'classnames'
import { usePopulateSearches, usePopulateMeasurements } from '@/vw/services'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { VWSearchAsideComponent } from '@/vw/components/search-aside'
import { VWSearchMainComponent } from '@/vw/components/search-main'
import { VWProvider } from '@/vw/contexts'

export function VWSearchesWidget() {
    const searches = usePopulateSearches()
    const measurements = usePopulateMeasurements()

    return (
        <div
            data-testid="vw-searches-widget"
            className={cn(styles.container, 'grid grid-cols-[15vw_auto]')}
        >
            {!searches.isLoading && !measurements.isLoading && (
                <VWProvider>
                    <ScrollArea>
                        <VWSearchAsideComponent />
                    </ScrollArea>
                    <ScrollArea>
                        <VWSearchMainComponent />
                    </ScrollArea>
                </VWProvider>
            )}
        </div>
    )
}
