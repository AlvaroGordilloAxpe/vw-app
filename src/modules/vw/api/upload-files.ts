import { api } from './axios-instance'
import { handleError } from './utils'
import { UploadFileFormDataType } from './types'
import { QueryFunctionContext } from '@tanstack/react-query'
import { UPLOAD_FILES } from './constants'

export const uploadFilesApi = async ({ queryKey }: QueryFunctionContext) => {
    const [, fields] = queryKey
    const data = fields as UploadFileFormDataType
    const formData = new FormData()

    formData.append('file', data.metadata as Blob)

    return await api
        .post(`/${UPLOAD_FILES}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => response)
        .catch((error) => {
            handleError(error)
        })
}
