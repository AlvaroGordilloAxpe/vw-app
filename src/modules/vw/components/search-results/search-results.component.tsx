import styles from './search-results.module.css'
import * as Table from '@/common/components/ui/table'
import * as Card from '@/common/components/ui/card'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { Icons } from '@/common/components/icons'
import { Button } from '@/common/components/ui/button'
import { useGetMeasurements } from '@/vw/services'

export function VWSearchResultsComponent() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error, isFetching, isLoading } = useGetMeasurements()

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
                    <ScrollArea>
                        <Table.Root>
                            <Table.Caption>
                                A list of your measurements.
                            </Table.Caption>
                            <Table.Header>
                                <Table.Row>
                                    <Table.Head className="w-[100px]">
                                        ID
                                    </Table.Head>
                                    <Table.Head>Name</Table.Head>
                                    <Table.Head>Description</Table.Head>
                                    <Table.Head>Comment</Table.Head>
                                    <Table.Head className="w-[100px]">
                                        Test ID
                                    </Table.Head>
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
                                                {item.description}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item.comment}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item.testid}
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
                <Card.Footer>
                    <Button className="ml-auto" size="sm">
                        Save Search Results
                    </Button>
                </Card.Footer>
            </Card.Root>
        </div>
    )
}
