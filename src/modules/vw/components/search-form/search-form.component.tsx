import styles from './search-form.module.css'
import cn from 'classnames'
import { z } from 'zod'
import * as Form from '@/common/components/ui/form'
import { LoadingButton } from '@/common/components/loading-button'
import { Input } from '@/common/components/ui/input'
import { Button } from '@/common/components/ui/button'
import * as Dialog from '@/common/components/ui/dialog'
import { useVWContext } from '@/vw/contexts'
import { useGetSearchById } from '@/vw/services'
import { Searches } from '@/vw/database'

const schema = z.object({
    id: z.string(),
    name: z.string(),
    testid: z.string(),
})
const schemaDialog = z.object({
    titulo: z.string(),
})
const ROOT_SUBMIT = 'root.submit'

type SearchFormDataType = z.infer<typeof schema>
type SearchFormDialogDataType = z.infer<typeof schemaDialog>

type SearchFormProps = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onSubmit'
> & {
    onSubmit: (fields: SearchFormDataType) => Promise<void | string>
}

export function VWSearchFormComponent({ onSubmit, ...props }: SearchFormProps) {
    const { searchID } = useVWContext()
    const { data } = useGetSearchById(searchID)

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
                    form.setError(ROOT_SUBMIT, {
                        type: 'server',
                        message: 'Network Error',
                    })
                }
            } catch (e: any) {
                console.error('UploadForm.onSubmit error', e)

                form.setError(ROOT_SUBMIT, {
                    type: 'unknown',
                    message: 'Unknown error',
                })
            }
        },
    })
    const formDialog = Form.useZodForm<SearchFormDialogDataType>({
        criteriaMode: 'firstError',
        schema: schemaDialog,
        defaultValues: {
            titulo: '',
        },
        onSubmit: async (data) => {
            try {
                //const response = await onSubmit(data)
                console.log('dataDialog', data)

                /*
                if (!response) {
                    form.setError(ROOT_SUBMIT, {
                        type: 'server',
                        message: 'Network Error',
                    })
                }
                */
            } catch (e: any) {
                console.error('UploadForm.onSubmit error', e)

                form.setError(ROOT_SUBMIT, {
                    type: 'unknown',
                    message: 'Unknown error',
                })
            }
        },
    })

    return (
        <div
            data-testid="vw-search-form-component"
            className={cn(styles.container, 'flex flex-row')}
        >
            <Form.Root {...form} className="basis-11/12">
                <div className="flex flex-row gap-x-8">
                    <Form.Field
                        control={form.control}
                        name="name"
                        render={({
                            field: { name, onBlur, onChange, ref, value },
                        }) => (
                            <Form.Item className="basis-1/3">
                                <Form.Label>Name</Form.Label>
                                <Form.Input>
                                    <Input
                                        type="text"
                                        name={name}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        ref={ref}
                                        value={
                                            data && data?.prompt
                                                ? data.prompt
                                                : value
                                        }
                                    />
                                </Form.Input>
                                <Form.Message />
                            </Form.Item>
                        )}
                    />
                    <LoadingButton
                        className="auto mr-6 mt-8"
                        loading={form.formState.isSubmitting}
                        type="submit"
                    >
                        Search
                    </LoadingButton>
                </div>
                <Form.CustomMessage className="mt-8" isError>
                    {form.formState.errors.root?.submit?.message || null}
                </Form.CustomMessage>
            </Form.Root>

            <Dialog.Root>
                <Dialog.Trigger asChild className="auto mt-8">
                    <Button variant="secondary">Save Search</Button>
                </Dialog.Trigger>
                <Dialog.Modal className="bg-neutral-50 shadow-xl shadow-slate-900/30">
                    <Dialog.Header>
                        <Dialog.DialogTitle>
                            Give a name to the search
                        </Dialog.DialogTitle>
                        <Dialog.Description>
                            <Form.Root {...formDialog}>
                                <div className="flex flex-row mt-4">
                                    <Form.Field
                                        control={formDialog.control}
                                        name="titulo"
                                        render={({ field }) => (
                                            <Form.Item className="basis-11/12">
                                                <Form.Input>
                                                    <Input
                                                        type="text"
                                                        {...field}
                                                        placeholder="nombre..."
                                                        autoFocus
                                                    />
                                                </Form.Input>
                                                <Form.Message />
                                            </Form.Item>
                                        )}
                                    />
                                    <LoadingButton
                                        className="auto ml-4"
                                        loading={
                                            formDialog.formState.isSubmitting
                                        }
                                        type="submit"
                                    >
                                        Save
                                    </LoadingButton>
                                </div>
                            </Form.Root>
                        </Dialog.Description>
                    </Dialog.Header>
                </Dialog.Modal>
            </Dialog.Root>
        </div>
    )
}
