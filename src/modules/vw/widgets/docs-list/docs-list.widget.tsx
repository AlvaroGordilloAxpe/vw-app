import styles from './docs-list.module.css'
import { usePopulateFiles, usePopulateTests } from '@/vw/services'
import { VWFilesList } from '@/vw/components/files-list'

export function VWDocsListWidget() {
    const files = usePopulateFiles()
    const tests = usePopulateTests()

    return (
        <div data-testid="vw-docs-list-widget" className={styles.container}>
            {!files.isLoading && !tests.isLoading && <VWFilesList />}
        </div>
    )
}
