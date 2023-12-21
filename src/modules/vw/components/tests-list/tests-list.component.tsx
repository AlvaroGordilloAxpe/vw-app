import styles from './tests-list.module.css'
import cn from 'classnames'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import * as Card from '@/common/components/ui/card'
import * as Table from '@/common/components/ui/table'
import * as Tooltip from '@/common/components/ui/tooltip'
import { Icons } from '@/common/components/icons'
import { Button } from '@/common/components/ui/button'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { useGetFiles } from '@/vw/services'

const UPLOAD_PATH = 'upload-files'

export function VWTestsListComponent() {
    const { data, isFetching, isLoading } = useGetFiles()
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
                                    <Table.Head>Type</Table.Head>
                                    <Table.Head></Table.Head>
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
                                                {item.mimetype}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Tooltip.Provider>
                                                    <Tooltip.Root>
                                                        <Tooltip.Trigger>
                                                            <Link
                                                                href={`${pathName}/${UPLOAD_PATH}/${item.id}`}
                                                            >
                                                                <Icons.eye />
                                                            </Link>
                                                        </Tooltip.Trigger>
                                                        <Tooltip.Content>
                                                            {`View Test ${item.id}`}
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
                                                {item.mimetype}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Tooltip.Provider>
                                                    <Tooltip.Root>
                                                        <Tooltip.Trigger>
                                                            <Link
                                                                href={`${pathName}/${UPLOAD_PATH}/${item.id}`}
                                                            >
                                                                <Icons.eye />
                                                            </Link>
                                                        </Tooltip.Trigger>
                                                        <Tooltip.Content>
                                                            {`View Test ${item.id}`}
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
                                                {item.mimetype}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Tooltip.Provider>
                                                    <Tooltip.Root>
                                                        <Tooltip.Trigger>
                                                            <Link
                                                                href={`${pathName}/${UPLOAD_PATH}/${item.id}`}
                                                            >
                                                                <Icons.eye />
                                                            </Link>
                                                        </Tooltip.Trigger>
                                                        <Tooltip.Content>
                                                            {`View Test ${item.id}`}
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
