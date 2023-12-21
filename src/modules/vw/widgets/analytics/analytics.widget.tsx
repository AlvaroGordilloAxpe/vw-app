import styles from './analytics.module.css'
import { VWAnalyticsListComponent } from '@/vw/components/analytics-list'
import { usePopulateAnalytics } from '@/vw/services'

export function VWAnalyticsWidget() {
    const analytics = usePopulateAnalytics()

    return (
        <div data-testid="vw-analytics-widget" className={styles.container}>
            {!analytics.isLoading && <VWAnalyticsListComponent />}
        </div>
    )
}
