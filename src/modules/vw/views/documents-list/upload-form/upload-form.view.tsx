import styles from './upload-form.module.css'
import { VWUploadTestsWidget } from '@/vw/widgets/upload-tests'

export function VWUploadFormView() {
    return (
        <div data-testid="vw-upload-form-view" className={styles.container}>
            <VWUploadTestsWidget />
        </div>
    )
}
