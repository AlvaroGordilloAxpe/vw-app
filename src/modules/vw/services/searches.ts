import { useQuery } from '@tanstack/react-query'
import { populteSearches, getSearches } from '@/vw/database/searches'

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
