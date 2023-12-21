import { api } from './axios-instance'
import { handleError } from './utils'
import { UploadFileFormDataType } from './types'
import { QueryFunctionContext } from '@tanstack/react-query'

export const uploadFilesApi = async ({ queryKey }: QueryFunctionContext) => {
    const [, fields] = queryKey
    const data = fields as UploadFileFormDataType
    const formData = new FormData()

    formData.append('file', data.metadata as Blob)

    return await api
        .post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => response)
        .catch((error) => {
            handleError(error)
        })
}
