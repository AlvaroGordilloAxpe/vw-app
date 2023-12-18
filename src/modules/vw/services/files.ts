import { useQuery } from '@tanstack/react-query'
import { populateFiles, getFiles, getFileById } from '@/vw/database/files'

export const usePopulateFiles = () => {
    return useQuery({
        queryKey: ['populatefiles'],
        queryFn: populateFiles,
    })
}

export const useGetFiles = () => {
    return useQuery({
        queryKey: ['getfiles'],
        queryFn: getFiles,
    })
}

export const useGetFileById = (id: string) => {
    return useQuery({
        queryKey: ['getfilebyid', id],
        queryFn: getFileById,
    })
}
