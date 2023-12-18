import styles from './searches.module.css'
import { VWSearchesWidget } from '@/vw/widgets/searches'

export function VWSearchesView() {
    return (
        <div data-testid="vw-searches-view" className={styles.container}>
            <VWSearchesWidget />
        </div>
    )
}
