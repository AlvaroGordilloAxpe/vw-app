import styles from './documents-list.module.css'
import { VWDocsListWidget } from '@/vw/widgets/docs-list'

export function VWDocumentsListView() {
    return (
        <div data-testid="vw-documents-list-view" className={styles.container}>
            <VWDocsListWidget />
        </div>
    )
}
