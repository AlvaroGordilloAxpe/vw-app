import styles from './searches.module.css'
import cn from 'classnames'
import { usePopulateSearches } from '@/vw/services'
import { ScrollArea } from '@/common/components/ui/scroll-area'

export function VWSearchesWidget() {
    const searches = usePopulateSearches()

    return (
        <div
            data-testid="vw-searches-widget"
            className={cn(styles.container, 'grid grid-cols-[15vw_auto]')}
        >
            {!searches.isLoading && (
                <>
                    <ScrollArea className="bg-gray-100">
                        <h1>VW Searches Widget Aside</h1>
                    </ScrollArea>
                    <ScrollArea>
                        <h1>VW Searches Widget Main</h1>
                    </ScrollArea>
                </>
            )}
        </div>
    )
}
