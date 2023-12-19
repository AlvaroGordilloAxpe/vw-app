import styles from './aside-search.module.css'
import cn from 'classnames'
import { useGetSearches } from '@/vw/services'

export function VWAsideSearchComponent() {
    const { data, isLoading } = useGetSearches()

    return (
        <div
            data-testid="vw-aside-search-component"
            className={cn(styles.container, 'bg-gray-100')}
        >
            {!isLoading && data && (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
