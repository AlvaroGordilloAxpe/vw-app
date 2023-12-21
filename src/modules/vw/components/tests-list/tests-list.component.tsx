import styles from './tests-list.module.css'
import cn from 'classnames'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import * as Card from '@/common/components/ui/card'
import * as Table from '@/common/components/ui/table'
import * as Dialog from '@/common/components/ui/dialog'
import { Icons } from '@/common/components/icons'
import { Button } from '@/common/components/ui/button'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { useGetTests } from '@/vw/services'
import { Test } from '@/vw/database'

const UPLOAD_PATH = 'upload-files'
const ANALYTICS_PATH = '/vw/analytics'

export const VWTestInfoDialog = ({ item }: { item: Test }) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button variant="link" size="sm" title={`Info Test ${item.id}`}>
                    <Icons.eye />
                </Button>
            </Dialog.Trigger>
            <Dialog.Modal className="max-w-[80vw]">
                <Dialog.Header>
                    <Dialog.Title>Information Test ID {item.id}</Dialog.Title>
                    <Table.Root className="mt-6">
                        <Table.Header>
                            <Table.Row>
                                <Table.Head>Project Name</Table.Head>
                                <Table.Head>Emission Standard</Table.Head>
                                <Table.Head>Vehicle Name</Table.Head>
                                <Table.Head>Client</Table.Head>
                                <Table.Head>Job Number</Table.Head>
                                <Table.Head>Cost Center</Table.Head>
                                <Table.Head>Department</Table.Head>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{item.ProjectName}</Table.Cell>
                                <Table.Cell>{item.EmissionStandard}</Table.Cell>
                                <Table.Cell>{item.VehicleName}</Table.Cell>
                                <Table.Cell>{item.Client}</Table.Cell>
                                <Table.Cell>{item.JobNumber}</Table.Cell>
                                <Table.Cell>{item.CostCenter}</Table.Cell>
                                <Table.Cell>{item.Department}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Dialog.Header>
            </Dialog.Modal>
        </Dialog.Root>
    )
}

export function VWTestsListComponent() {
    const { data, isFetching, isLoading } = useGetTests()
    const pathName = usePathname()

    return (
        <div
            data-testid="vw-tests-list-component"
            className={cn(styles.container, 'flex justify-center items-center')}
        >
            <Card.Root className="w-[90vw] h-[80vh] bg-neutral-50 shadow-xl shadow-slate-900/30">
                <Card.Header className="flex flex-row justify-between">
                    <div>
                        <Card.Title className="text-2xl">Tests List</Card.Title>
                        <Card.Description>
                            A list of your tests.
                        </Card.Description>
                    </div>
                    <div>
                        <Button disabled={isFetching}>
                            <Link href={`${pathName}/${UPLOAD_PATH}`}>
                                Upload Tests
                            </Link>
                        </Button>
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
                                    <Table.Head>Description</Table.Head>
                                    <Table.Head>Comment</Table.Head>
                                    <Table.Head></Table.Head>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {!isLoading && data ? (
                                    data.map((item: Test) => (
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
                                            <Table.Cell className="text-right w-[200px]">
                                                <VWTestInfoDialog item={item} />
                                                <Button
                                                    className="ml-4"
                                                    title={`View Analytics ${item.id}`}
                                                    size="sm"
                                                    variant="link"
                                                >
                                                    <Link
                                                        href={`${ANALYTICS_PATH}/${item.id}`}
                                                    >
                                                        <Icons.lineChart />
                                                    </Link>
                                                </Button>
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
