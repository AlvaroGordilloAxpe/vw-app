import { api } from './axios-instance'
import { handleError } from './utils'
import { UploadFileFormDataType } from './types'
import { UPLOAD_FILES } from './constants'

export const uploadFilesApi = async ({
    metadata,
    files = [],
}: UploadFileFormDataType) => {
    const formData = new FormData()

    formData.append('metadata', metadata as Blob)

    files.forEach((file) => {
        formData.append('files[]', file as Blob)
    })

    return await api
        .post(`/${UPLOAD_FILES}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            auth: {
                username: 'admin',
                password: 'admin',
            },
        })
        .then((response) => response)
        .catch((error) => {
            handleError(error)
        })
}
