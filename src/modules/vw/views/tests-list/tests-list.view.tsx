import styles from './tests-list.module.css'
import { VWTestsListWidget } from '@/vw/widgets/tests-list'

export function VWTestsListView() {
    return (
        <div data-testid="vw-tests-list-view" className={styles.container}>
            <VWTestsListWidget />
        </div>
    )
}
