import styles from './files-list.module.css'
import { useGetFiles } from '@/vw/services'

export function VWFilesList() {
    const { data, error, isFetching, isLoading } = useGetFiles()
    console.log(error, isFetching)

    return (
        <div data-testid="vw-files-list-component" className={styles.container}>
            {!isLoading && (
                <ul>
                    {data?.map((file) => (
                        <li key={file.id}>{file.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
