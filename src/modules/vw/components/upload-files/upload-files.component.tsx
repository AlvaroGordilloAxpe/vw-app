import styles from './upload-files.module.css'
import cn from 'classnames'
import { z } from 'zod'
import Link from 'next/link'
import * as Card from '@/common/components/ui/card'
import * as Form from '@/common/components/ui/form'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { LoadingButton } from '@/common/components/loading-button'
import { Input } from '@/common/components/ui/input'
import { Button } from '@/common/components/ui/button'

const schema = z.object({
    metadata: z.instanceof(File).optional(),
    files: z.instanceof(FileList).optional(),
})

export type UploadFormDataType = z.infer<typeof schema>

type UploadFormProps = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onSubmit'
> & {
    onSubmit: (fields: UploadFormDataType) => Promise<void | string>
}

const TESTS_LIST = 'vw/tests-list'

export function VWUploadFilesComponent({
    onSubmit,
    ...props
}: UploadFormProps) {
    const form = Form.useZodForm<UploadFormDataType>({
        criteriaMode: 'firstError',
        schema,
        defaultValues: {
            metadata: undefined,
            files: undefined,
        },
        onSubmit: async (data) => {
            try {
                const response = await onSubmit(data)

                if (!response) {
                    form.setError('root.submit', {
                        type: 'server',
                        message: 'Network Error',
                    })
                }
            } catch (e: any) {
                console.error('UploadForm.onSubmit error', e)

                form.setError('root.submit', {
                    type: 'unknown',
                    message: 'Unknown error',
                })
            }
        },
    })

    return (
        <div
            data-testid="vw-upload-files-component"
            className={cn(styles.container, 'flex justify-center items-center')}
        >
            <Card.Root className="w-[50vw] h-[80vh] bg-neutral-50 shadow-xl shadow-slate-900/30">
                <Card.Header className="flex flex-row justify-between">
                    <div>
                        <Card.Title className="text-2xl">
                            Upload Files
                        </Card.Title>
                        <Card.Description>
                            Form to upload metadata and others files
                        </Card.Description>
                    </div>
                    <div>
                        <Button>
                            <Link href={`/${TESTS_LIST}`}>Tests List</Link>
                        </Button>
                    </div>
                </Card.Header>
                <Card.Content>
                    <Form.Root {...form}>
                        <div className="space-y-4 pl-2 pr-2">
                            <ScrollArea className="h-[56vh]">
                                <Form.Field
                                    control={form.control}
                                    name="metadata"
                                    render={({ field }) => (
                                        <Form.Item>
                                            <Form.Label>
                                                Select a new metadata
                                            </Form.Label>
                                            <Form.Input>
                                                <Input
                                                    accept=".json"
                                                    type="file"
                                                    onChange={(e) => {
                                                        console.log(
                                                            'metadata',
                                                            e.target.files?.[0]
                                                        )
                                                        field.onChange(
                                                            e.target.files?.[0]
                                                        )
                                                    }}
                                                />
                                            </Form.Input>
                                            <Form.Message />
                                        </Form.Item>
                                    )}
                                />
                                <Form.Field
                                    control={form.control}
                                    name="files"
                                    render={({ field }) => (
                                        <Form.Item className="mt-6">
                                            <Form.Label>
                                                Select xml and dat files
                                            </Form.Label>
                                            <Form.Input>
                                                <Input
                                                    type="file"
                                                    accept=".xml, .dat"
                                                    multiple
                                                    onChange={(e) => {
                                                        const archivos =
                                                            e.target.files
                                                        const archivos_values =
                                                            archivos
                                                                ? Object.values(
                                                                      archivos
                                                                  )
                                                                : []
                                                        console.log(
                                                            'files',
                                                            archivos_values
                                                        )
                                                        field.onChange(
                                                            archivos_values
                                                        )
                                                    }}
                                                />
                                            </Form.Input>
                                            <Form.Message />
                                        </Form.Item>
                                    )}
                                />
                            </ScrollArea>
                        </div>
                        <Form.CustomMessage className="mt-4 ml-2" isError>
                            {form.formState.errors.root?.submit?.message ||
                                null}
                        </Form.CustomMessage>
                        <LoadingButton
                            className="mt-4 ml-2"
                            loading={form.formState.isSubmitting}
                            type="submit"
                        >
                            Upload File
                        </LoadingButton>
                    </Form.Root>
                </Card.Content>
            </Card.Root>
        </div>
    )
}
