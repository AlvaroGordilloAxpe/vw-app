import styles from './search-aside.module.css'
import cn from 'classnames'
import { useGetSearches } from '@/vw/services'
import * as Command from '@/common/components/ui/command'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useVWContext } from '@/vw/contexts'

export function VWSearchAsideComponent() {
    const { data, isLoading } = useGetSearches()
    const [selectedItem, setSelectedItem] = useState('')
    const { setSearchID } = useVWContext()
    //const search = useCommandState((state) => state.search)

    return (
        <div
            data-testid="vw-search-aside-component"
            className={cn(styles.container, 'bg-white')}
        >
            {!isLoading && data && (
                <Command.Root>
                    <Command.Input
                        className="p-1"
                        IconComponent={Search}
                        placeholder="Busca una opción"
                    />
                    <Command.List>
                        <Command.Empty>Sin resultados</Command.Empty>
                        <Command.Group>
                            {data.map((item) => (
                                <Command.Item
                                    data-clicked={item.name === selectedItem}
                                    key={item.id}
                                    className={styles.items}
                                    onSelect={(value) => {
                                        setSelectedItem(value)
                                        setSearchID(item.id)
                                    }}
                                >
                                    {item.name}
                                </Command.Item>
                            ))}
                        </Command.Group>
                    </Command.List>
                </Command.Root>
            )}
        </div>
    )
}
