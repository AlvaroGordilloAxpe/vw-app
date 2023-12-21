import styles from './upload-files.module.css'
import { useParams } from 'next/navigation'
import { VWUploadFilesComponent } from '@/vw/components/upload-files'
import { useGetFileById } from '@/vw/services'

export function VWUploadFilesWidget() {
    const { id } = useParams()
    const { data, isLoading } = useGetFileById(id as string)

    return (
        <div data-testid="vw-upload-files-widget" className={styles.container}>
            {!isLoading && (
                <VWUploadFilesComponent
                    file={data}
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
            )}
        </div>
    )
}
