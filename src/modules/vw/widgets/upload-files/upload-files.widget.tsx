import styles from './upload-files.module.css'
import { VWUploadFilesComponent } from '@/vw/components/upload-files'
import { uploadFilesApi } from '@/vw/api'
import { useRouter } from 'next/navigation'

export function VWUploadFilesWidget() {
    const router = useRouter()

    return (
        <div data-testid="vw-upload-files-widget" className={styles.container}>
            <VWUploadFilesComponent
                onSubmit={async (fields) => {
                    try {
                        await uploadFilesApi(fields)

                        router.back()
                    } catch (e: any) {
                        console.log('error', e)
                        return 'Invalid credentials'
                    }
                }}
            />
        </div>
    )
}
