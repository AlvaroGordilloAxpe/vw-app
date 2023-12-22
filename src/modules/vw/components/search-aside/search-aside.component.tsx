import styles from './search-aside.module.css'
import cn from 'classnames'
import * as Command from '@/common/components/ui/command'
import { Button } from '@/common/components/ui/button'
import { Icons } from '@/common/components/icons'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useVWContext } from '@/vw/contexts'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/vw/database'

export function VWSearchAsideComponent() {
    const [selectedItem, setSelectedItem] = useState('')
    const { setSearchID } = useVWContext()
    const data = useLiveQuery(() => db.searches.toArray())

    return (
        <div
            data-testid="vw-search-aside-component"
            className={cn(styles.container, 'bg-white')}
        >
            {data && (
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
                                            console.log(typeof item.id)
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
                                        onClick={() =>
                                            db.searches.delete(item.id)
                                        }
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
