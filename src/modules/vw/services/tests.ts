import { useQuery } from '@tanstack/react-query'
import { populatesTests, getTests } from '@/vw/database/tests'
import { UploadFileFormDataType, uploadFilesApi } from '@/vw/api'

export const usePopulateTests = () => {
    return useQuery({
        queryKey: ['populatetests'],
        queryFn: populatesTests,
    })
}

export const useGetTests = () => {
    return useQuery({
        queryKey: ['gettests'],
        queryFn: getTests,
    })
}

export const InsertFilesQuery = (fields: UploadFileFormDataType) => {
    return useQuery({
        queryKey: ['insertfiles', fields],
        queryFn: uploadFilesApi,
    })
}
