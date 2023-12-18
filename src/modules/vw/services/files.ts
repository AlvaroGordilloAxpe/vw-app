import { useQuery } from '@tanstack/react-query'
import { insertFilesDB, getFiles, getFileById } from '@/vw/database/files'

export const useFilesToDB = () => {
    return useQuery({
        queryKey: ['filestodb'],
        queryFn: insertFilesDB,
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
