import styles from './upload-form.module.css'
import cn from 'classnames'
import { z } from 'zod'
import Link from 'next/link'
import * as Card from '@/common/components/ui/card'
import * as Form from '@/common/components/ui/form'
import { ScrollArea } from '@/common/components/ui/scroll-area'
import { Textarea } from '@/common/components/ui/textarea'
import { LoadingButton } from '@/common/components/loading-button'
import { Input } from '@/common/components/ui/input'
import { File } from '@/vw/database/'
import { Button } from '@/common/components/ui/button'

const schema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    comment: z.string(),
    mimetype: z.string(),
})

type UploadFormDataType = z.infer<typeof schema>

type UploadFormProps = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onSubmit'
> & {
    file: File | null | undefined
    onSubmit: (fields: UploadFormDataType) => Promise<void | string>
}

const UPLOAD_LIST = 'vw/documents-list'

export function VWUploadFormComponent({
    file,
    onSubmit,
    ...props
}: UploadFormProps) {
    const form = Form.useZodForm<UploadFormDataType>({
        criteriaMode: 'firstError',
        schema,
        defaultValues: {
            id: file ? file.id : '',
            name: file ? file.name : '',
            description: file ? file.description : '',
            comment: file ? file.comment : '',
            mimetype: file ? file.mimetype : '',
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
            data-testid="vw-upload-form-component"
            className={cn(styles.container, 'flex justify-center items-center')}
        >
            <Card.Root className="w-1/2 h-[70vh] bg-neutral-50 shadow-xl shadow-slate-900/30">
                <Card.Header className="flex flex-row justify-between">
                    <div>
                        <Card.Title className="text-2xl">
                            Upload Form
                        </Card.Title>
                        <Card.Description>
                            {!file
                                ? 'Upload New File.'
                                : `Edit File ${file.id}`}
                        </Card.Description>
                    </div>
                    <div>
                        <Button>
                            <Link href={`/${UPLOAD_LIST}`}>Documents List</Link>
                        </Button>
                    </div>
                </Card.Header>
                <Card.Content>
                    <ScrollArea>
                        <Form.Root {...form}>
                            <div className="space-y-4 pl-2 pr-2">
                                <Form.Field
                                    control={form.control}
                                    name="id"
                                    render={({ field }) => (
                                        <Form.Item>
                                            <Form.Input>
                                                <Input
                                                    type="hidden"
                                                    {...field}
                                                />
                                            </Form.Input>
                                            <Form.Message />
                                        </Form.Item>
                                    )}
                                />
                                <Form.Field
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <Form.Item>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Input>
                                                <Input type="text" {...field} />
                                            </Form.Input>
                                            <Form.Message />
                                        </Form.Item>
                                    )}
                                />
                                <Form.Field
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <Form.Item>
                                            <Form.Label>Description</Form.Label>
                                            <Form.Input>
                                                <Textarea rows={4} {...field} />
                                            </Form.Input>
                                            <Form.Message />
                                        </Form.Item>
                                    )}
                                />
                                <Form.Field
                                    control={form.control}
                                    name="comment"
                                    render={({ field }) => (
                                        <Form.Item>
                                            <Form.Label>Comment</Form.Label>
                                            <Form.Input>
                                                <Textarea rows={4} {...field} />
                                            </Form.Input>
                                            <Form.Message />
                                        </Form.Item>
                                    )}
                                />
                                <Form.Field
                                    control={form.control}
                                    name="mimetype"
                                    render={({ field }) => (
                                        <Form.Item>
                                            <Form.Label>Type</Form.Label>
                                            <Form.Input>
                                                <Input type="text" {...field} />
                                            </Form.Input>
                                            <Form.Message />
                                        </Form.Item>
                                    )}
                                />
                            </div>
                            <LoadingButton
                                className="mt-8 ml-2"
                                loading={form.formState.isSubmitting}
                                type="submit"
                            >
                                Upload File
                            </LoadingButton>
                        </Form.Root>
                    </ScrollArea>
                </Card.Content>
            </Card.Root>
        </div>
    )
}

/*
: async (data) => {
            try {
                console.log('data', data)

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
*/
