import { useQuery } from '@tanstack/react-query'
import {
    populteSearches,
    getSearches,
    getSearchById,
    deleteSearchById,
} from '@/vw/database/searches'

export const usePopulateSearches = () => {
    return useQuery({
        queryKey: ['populatesearches'],
        queryFn: populteSearches,
    })
}

export const useGetSearches = () => {
    return useQuery({
        queryKey: ['getsearches'],
        queryFn: getSearches,
    })
}

export const useGetSearchById = (id: number) => {
    return useQuery({
        queryKey: ['getsearchbyid', id],
        queryFn: getSearchById,
    })
}

export const useDeleteSearchById = (id?: number) => {
    return useQuery({
        queryKey: ['deletesearchbyid', id],
        queryFn: deleteSearchById,
        refetchOnWindowFocus: false,
        enabled: false,
    })
}
