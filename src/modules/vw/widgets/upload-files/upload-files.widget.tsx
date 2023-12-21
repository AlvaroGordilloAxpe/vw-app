import styles from './upload-files.module.css'
import { VWUploadFilesComponent } from '@/vw/components/upload-files'
import { uploadFilesApi } from '@/vw/api'

export function VWUploadFilesWidget() {
    return (
        <div data-testid="vw-upload-files-widget" className={styles.container}>
            <VWUploadFilesComponent
                onSubmit={async (fields) => {
                    try {
                        const result = await uploadFilesApi(fields)

                        console.log(result)

                        //router.replace(callbackUrl)
                    } catch (e: any) {
                        console.log('error', e)
                        return 'Invalid credentials'
                    }
                }}
            />
        </div>
    )
}
