import styles from './search-main.module.css'
import cn from 'classnames'
import * as Card from '@/common/components/ui/card'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { VWSearchFormComponent } from '@/vw/components/search-form'
import { VWSearchResultsComponent } from '@/vw/components/search-results'
import { getMeasurentsByTestNameApi } from '@/vw/api'
import { MeasurementQuantityDataType } from '@/vw/api'
import { useState } from 'react'

export function VWSearchMainComponent() {
    const [measurements, setMeasurements] = useState<
        MeasurementQuantityDataType[]
    >([])

    return (
        <div
            data-testid="vw-search-main-component"
            className={cn(styles.container, 'flex justify-center items-center')}
        >
            <Card.Root className="w-[80vw] h-[80vh] bg-neutral-50 shadow-xl shadow-slate-900/30">
                <Card.Header className="flex flex-column justify-between">
                    <div>
                        <Card.Title className="text-2xl">
                            Search Data View
                        </Card.Title>
                        <Card.Description>
                            View about searching data and its results.
                        </Card.Description>
                    </div>
                </Card.Header>
                <Card.Content>
                    <ScrollArea className="h-[65vh]">
                        <div className="flex flex-col gap-y-6">
                            <VWSearchFormComponent
                                onSubmit={async (fields) => {
                                    try {
                                        const results =
                                            await getMeasurentsByTestNameApi(
                                                fields.name
                                            )
                                        if (results) setMeasurements(results)
                                    } catch (e: any) {
                                        console.log('error aaaaaa', e)
                                        return 'Invalid credentials'
                                    }
                                }}
                            />
                            <VWSearchResultsComponent
                                measurements={measurements}
                            />
                        </div>
                    </ScrollArea>
                </Card.Content>
            </Card.Root>
        </div>
    )
}
