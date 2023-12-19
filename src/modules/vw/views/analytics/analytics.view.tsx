import styles from './analytics.module.css'
import { VWAnalyticsMainWidget } from '@/vw/widgets/analytics-main'

export function VWAnalyticsView() {
    return (
        <div data-testid="vw-analytics-view" className={styles.container}>
            <VWAnalyticsMainWidget />
        </div>
    )
}
