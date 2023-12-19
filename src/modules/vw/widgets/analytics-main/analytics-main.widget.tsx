import styles from './analytics-main.module.css'
import { VWAnalyticsListComponent } from '@/vw/components/analytics-list'

export function VWAnalyticsMainWidget() {
    return (
        <div
            data-testid="vw-analytics-main-widget"
            className={styles.container}
        >
            <VWAnalyticsListComponent />
        </div>
    )
}
