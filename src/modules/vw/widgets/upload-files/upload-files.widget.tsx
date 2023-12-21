import styles from './upload-files.module.css'
import { VWUploadFilesComponent } from '@/vw/components/upload-files'

export function VWUploadFilesWidget() {
    return (
        <div data-testid="vw-upload-files-widget" className={styles.container}>
            <VWUploadFilesComponent
                onSubmit={async (fields: any) => {
                    try {
                        console.log('fields', fields)
                        //router.replace(callbackUrl)
                    } catch (e: any) {
                        console.log('error aaaaaa', e)
                        return 'Invalid credentials'
                    }
                }}
            />
        </div>
    )
}
