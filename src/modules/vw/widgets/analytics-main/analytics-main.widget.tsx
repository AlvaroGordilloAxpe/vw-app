import styles from './analytics-main.module.css'
import { VWAnalyticsListComponent } from '@/vw/components/analytics-list'
import { VWAnalyticsChartComponent } from '@/vw/components/analytics-chart'
import { usePopulateAnalytics } from '@/vw/services'
import { useParams } from 'next/navigation'

export function VWAnalyticsMainWidget() {
    const analytics = usePopulateAnalytics()
    const { id } = useParams()

    return (
        <div
            data-testid="vw-analytics-main-widget"
            className={styles.container}
        >
            {!analytics.isLoading && !id && <VWAnalyticsListComponent />}
            {!analytics.isLoading && id && (
                <VWAnalyticsChartComponent id={id} />
            )}
        </div>
    )
}
