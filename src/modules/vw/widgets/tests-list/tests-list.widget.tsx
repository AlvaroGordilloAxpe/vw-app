import styles from './tests-list.module.css'
import { VWTestsListComponent } from '@/vw/components/tests-list'
import { usePopulateTests } from '@/vw/services'

export function VWTestsListWidget() {
    const tests = usePopulateTests()

    return (
        <div data-testid="vw-tests-list-widget" className={styles.container}>
            {!tests.isLoading && <VWTestsListComponent />}
        </div>
    )
}
