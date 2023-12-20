import styles from './upload-tests.module.css'
import { useParams } from 'next/navigation'
import { useGetFileById } from '@/vw/services'
import { VWUploadFormComponent } from '@/vw/components/upload-form'

export function VWUploadTestsWidget() {
    const { id } = useParams()
    const { data, isLoading } = useGetFileById(id as string)

    return (
        <div data-testid="vw-upload-tests-widget" className={styles.container}>
            {!isLoading && (
                <VWUploadFormComponent
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
