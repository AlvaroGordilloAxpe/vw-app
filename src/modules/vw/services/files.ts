import { useQuery } from '@tanstack/react-query'
import { insertFilesDB, getFiles } from '@/vw/database/files'

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
