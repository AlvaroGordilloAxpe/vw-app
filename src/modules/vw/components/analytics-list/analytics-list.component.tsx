import styles from './analytics-list.module.css'
import cn from 'classnames'
import { useParams, useRouter } from 'next/navigation'
import * as Card from '@/common/components/ui/card'
import * as Table from '@/common/components/ui/table'
import * as Dialog from '@/common/components/ui/dialog'
import { Icons } from '@/common/components/icons'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { Button } from '@/common/components/ui/button'
import { VWAnalyticsChartComponent } from '@/vw/components/analytics-chart'
import { useGetAnalytics } from '@/vw/services'

export const VWMetricsDialog = ({ id }: { id: string }) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant="link" size="sm" title={`Metrics ${id}`}>
                    <Icons.eye />
                </Button>
            </Dialog.Trigger>
            <Dialog.Modal className="max-w-[60vw] max-h-[95vh]">
                <Dialog.Header>
                    <Dialog.Title>Metrics {id}</Dialog.Title>
                    <VWAnalyticsChartComponent id={id} />
                </Dialog.Header>
            </Dialog.Modal>
        </Dialog.Root>
    )
}

export function VWAnalyticsListComponent() {
    const { data, isLoading } = useGetAnalytics()
    const router = useRouter()
    const { id } = useParams()
    console.log(id)

    return (
        <div
            data-testid="vw-analytics-list-component"
            className={cn(styles.container, 'flex justify-center items-center')}
        >
            <Card.Root className="w-[50vw] h-[80vh] bg-neutral-50 shadow-xl shadow-slate-900/30">
                <Card.Header className="flex flex-row justify-between">
                    <div>
                        <Card.Title className="text-2xl">
                            Analytics List
                        </Card.Title>
                        <Card.Description>
                            A list of analytics and its metrics data.
                        </Card.Description>
                    </div>
                    <div>
                        <Button onClick={() => router.back()}>Go Back</Button>
                    </div>
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
                                                <VWMetricsDialog id={item.id} />
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
