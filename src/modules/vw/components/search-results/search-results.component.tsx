import styles from './search-results.module.css'
import * as Table from '@/common/components/ui/table'
import * as Card from '@/common/components/ui/card'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { Icons } from '@/common/components/icons'
import { MeasurementQuantityDataType } from '@/vw/api'
import * as Dialog from '@/common/components/ui/dialog'
import { Button } from '@/common/components/ui/button'
import { VWAnalyticsChartComponent } from '@/vw/components/analytics-chart'

export function VWSearchResultsComponent({
    measurements,
}: {
    measurements: MeasurementQuantityDataType[]
}) {
    const data = measurements

    return (
        <div
            data-testid="vw-search-results-component"
            className={styles.container}
        >
            <Card.Root>
                <Card.Header>
                    <Card.Title>Results List</Card.Title>
                    <Card.Description>A list of results.</Card.Description>
                </Card.Header>
                <Card.Content>
                    <ScrollArea className="h-[43vh]">
                        <Table.Root>
                            <Table.Header>
                                <Table.Row>
                                    <Table.Head className="w-[100px]">
                                        ID
                                    </Table.Head>
                                    <Table.Head>Name</Table.Head>
                                    <Table.Head>Description</Table.Head>
                                    <Table.Head>Comment</Table.Head>
                                    <Table.Head></Table.Head>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {data ? (
                                    data.map((item) => (
                                        <Table.Row key={item.id}>
                                            <Table.Cell className="font-medium">
                                                {item.id}
                                            </Table.Cell>
                                            <Table.Cell>{item.name}</Table.Cell>
                                            <Table.Cell>
                                                {item.description}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item.comment}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Dialog.Root>
                                                    <Dialog.Trigger asChild>
                                                        <Button
                                                            variant="link"
                                                            size="sm"
                                                            title={`Metrics ${item.id}`}
                                                        >
                                                            <Icons.eye />
                                                        </Button>
                                                    </Dialog.Trigger>
                                                    <Dialog.Modal className="max-w-[60vw] max-h-[95vh]">
                                                        <Dialog.Header>
                                                            <Dialog.Title>
                                                                Metrics{' '}
                                                                {item.id}
                                                            </Dialog.Title>
                                                            <VWAnalyticsChartComponent
                                                                id={item.id}
                                                            />
                                                        </Dialog.Header>
                                                    </Dialog.Modal>
                                                </Dialog.Root>
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
