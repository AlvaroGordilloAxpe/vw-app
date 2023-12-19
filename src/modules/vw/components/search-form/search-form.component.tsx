import styles from './search-form.module.css'
import cn from 'classnames'
import { z } from 'zod'
import * as Form from '@/common/components/ui/form'
import { LoadingButton } from '@/common/components/loading-button'
import { Input } from '@/common/components/ui/input'

const schema = z.object({
    id: z.string(),
    name: z.string(),
    testid: z.string(),
})

type SearchFormDataType = z.infer<typeof schema>

type SearchFormProps = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onSubmit'
> & {
    onSubmit: (fields: SearchFormDataType) => Promise<void | string>
}

export function VWSearchFormComponent({ onSubmit, ...props }: SearchFormProps) {
    const form = Form.useZodForm<SearchFormDataType>({
        criteriaMode: 'firstError',
        schema,
        defaultValues: {
            id: '',
            name: '',
            testid: '',
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
            data-testid="vw-search-form-component"
            className={cn(styles.container, 'space-y-8 pl-1 pr-1')}
        >
            <Form.Root {...form}>
                <div className="space-y-4">
                    <Form.Field
                        control={form.control}
                        name="id"
                        render={({ field }) => (
                            <Form.Item>
                                <Form.Label>ID</Form.Label>
                                <Form.Input>
                                    <Input type="text" {...field} />
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
                        name="testid"
                        render={({ field }) => (
                            <Form.Item>
                                <Form.Label>Test ID</Form.Label>
                                <Form.Input>
                                    <Input type="text" {...field} />
                                </Form.Input>
                                <Form.Message />
                            </Form.Item>
                        )}
                    />
                </div>
                <Form.CustomMessage className="mt-8" isError>
                    {form.formState.errors.root?.submit?.message || null}
                </Form.CustomMessage>
                <LoadingButton
                    className="mt-8"
                    loading={form.formState.isSubmitting}
                    type="submit"
                >
                    Create Search
                </LoadingButton>
            </Form.Root>
        </div>
    )
}
