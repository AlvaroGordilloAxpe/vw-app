import styles from './analytics-list.module.css'
import cn from 'classnames'
import Link from 'next/link'
import * as Card from '@/common/components/ui/card'
import * as Table from '@/common/components/ui/table'
import * as Tooltip from '@/common/components/ui/tooltip'
import { Icons } from '@/common/components/icons'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { useGetAnalytics } from '@/vw/services'

const PATH_ANALYTICS = 'analytics'

export function VWAnalyticsListComponent() {
    const { data, isLoading } = useGetAnalytics()

    return (
        <div
            data-testid="vw-analytics-list-component"
            className={cn(styles.container, 'flex justify-center items-center')}
        >
            <Card.Root className="w-[50vw] h-[80vh] bg-neutral-50 shadow-xl shadow-slate-900/30">
                <Card.Header>
                    <Card.Title className="text-2xl">Analytics List</Card.Title>
                    <Card.Description>
                        A list of analytics and its metrics data.
                    </Card.Description>
                </Card.Header>
                <Card.Content>
                    <ScrollArea className="h-[64vh]">
                        <Table.Root>
                            <Table.Header>
                                <Table.Row>
                                    <Table.Head className="w-[200px]">
                                        ID
                                    </Table.Head>
                                    <Table.Head>Name</Table.Head>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {!isLoading && data ? (
                                    data.map((item) => (
                                        <Table.Row key={item.id}>
                                            <Table.Cell className="font-medium">
                                                {item.id}
                                            </Table.Cell>
                                            <Table.Cell>{item.name}</Table.Cell>
                                            <Table.Cell>
                                                <Tooltip.Provider>
                                                    <Tooltip.Root>
                                                        <Tooltip.Trigger>
                                                            <Link
                                                                href={`${PATH_ANALYTICS}/${item.id}`}
                                                            >
                                                                <Icons.eye />
                                                            </Link>
                                                        </Tooltip.Trigger>
                                                        <Tooltip.Content>
                                                            {`View Metric ${item.id}`}
                                                        </Tooltip.Content>
                                                    </Tooltip.Root>
                                                </Tooltip.Provider>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                ) : (
                                    <Table.Row>
                                        <Table.Cell
                                            colSpan={5}
                                            className="text-center"
                                        >
                                            <Icons.spinner className="animate-spin w-8 h-8 mr-2 inline-block ml-4" />
                                        </Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table.Root>
                    </ScrollArea>
                </Card.Content>
            </Card.Root>
        </div>
    )
}
