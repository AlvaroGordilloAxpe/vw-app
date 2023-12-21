import styles from './analytics.module.css'
import { VWAnalyticsWidget } from '@/vw/widgets/analytics'

export function VWAnalyticsView() {
    return (
        <div data-testid="vw-analytics-view" className={styles.container}>
            <VWAnalyticsWidget />
        </div>
    )
}
