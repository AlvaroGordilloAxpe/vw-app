import styles from './docs-list.module.css'
import { useFilesToDB, useTestsToDB } from '@/vw/services'
import { VWFilesList } from '@/vw/components/files-list'

export function VWDocsListWidget() {
    const files = useFilesToDB()
    const tests = useTestsToDB()

    return (
        <div data-testid="vw-docs-list-widget" className={styles.container}>
            {!files.isLoading && !tests.isLoading && <VWFilesList />}
        </div>
    )
}
