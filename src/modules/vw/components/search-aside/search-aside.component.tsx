import styles from './search-aside.module.css'
import cn from 'classnames'
import * as Command from '@/common/components/ui/command'
import { Button } from '@/common/components/ui/button'
import { Icons } from '@/common/components/icons'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useVWContext } from '@/vw/contexts'
import { useGetSearches } from '@/vw/services'

export function VWSearchAsideComponent() {
    const { data, isLoading } = useGetSearches()
    const [selectedItem, setSelectedItem] = useState('')
    const { setSearchID } = useVWContext()

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
                                <div
                                    key={item.id}
                                    className="flex flex-row justify-between"
                                >
                                    <Command.Item
                                        data-clicked={
                                            item.name === selectedItem
                                        }
                                        className={styles.items}
                                        onSelect={(value) => {
                                            setSelectedItem(value)
                                            setSearchID(item.id)
                                        }}
                                    >
                                        {item.name}
                                    </Command.Item>
                                    <Button
                                        className={styles.deleteIcon}
                                        size="sm"
                                        variant="link"
                                        title={`Delete ${item.id}`}
                                    >
                                        <Icons.close />
                                    </Button>
                                </div>
                            ))}
                        </Command.Group>
                    </Command.List>
                </Command.Root>
            )}
        </div>
    )
}
