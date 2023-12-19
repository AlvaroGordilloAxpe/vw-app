import styles from './aside-search.module.css'
import cn from 'classnames'
import { useGetSearches } from '@/vw/services'
import * as Command from '@/common/components/ui/command'
import { Search } from 'lucide-react'
import { useState } from 'react'

export function VWAsideSearchComponent() {
    const { data, isLoading } = useGetSearches()
    const [value, setValue] = useState('apple')

    return (
        <div
            data-testid="vw-aside-search-component"
            className={cn(styles.container, 'bg-white')}
        >
            {!isLoading && data && (
                <Command.Root value={value} onValueChange={setValue}>
                    <Command.Input
                        IconComponent={Search}
                        placeholder="Busca una opción"
                    />
                    <Command.List>
                        <Command.Empty>Sin resultados</Command.Empty>
                        <Command.Group>
                            {data.map((item) => (
                                <Command.Item
                                    key={item.id}
                                    className={styles.items}
                                >
                                    {item.name}
                                </Command.Item>
                            ))}
                        </Command.Group>
                    </Command.List>
                </Command.Root>
            )}

            <p>Selected: {value}</p>
        </div>
    )
}
