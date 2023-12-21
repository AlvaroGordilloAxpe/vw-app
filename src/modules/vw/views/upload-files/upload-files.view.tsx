import styles from './upload-files.module.css'
import { VWUploadFilesWidget } from '@/vw/widgets/upload-files'

export function VWUploadFilesView() {
    return (
        <div data-testid="vw-upload-files-view" className={styles.container}>
            <VWUploadFilesWidget />
        </div>
    )
}
