import { useQuery } from '@tanstack/react-query'
import { populatesTests } from '@/vw/database/tests'
import { getTestsApi, getTestByIdApi } from '@/vw/api'
//import { UploadFileFormDataType, uploadFilesApi } from '@/vw/api'

export const usePopulateTests = () => {
    return useQuery({
        queryKey: ['populatetests'],
        queryFn: populatesTests,
    })
}

export const useGetTests = () => {
    return useQuery({
        queryKey: ['gettests'],
        queryFn: getTestsApi,
    })
}

export const useGetTestBiId = (id: number) => {
    return useQuery({
        queryKey: ['gettestbyid', id],
        queryFn: getTestByIdApi,
    })
}
