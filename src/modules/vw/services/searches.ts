import { useQuery } from '@tanstack/react-query'
import { populteSearches } from '@/vw/database/searches'

export const usePopulateSearches = () => {
    return useQuery({
        queryKey: ['populatesearches'],
        queryFn: populteSearches,
    })
}
