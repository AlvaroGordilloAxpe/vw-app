import { useQuery } from '@tanstack/react-query'
import { populateUsers } from '@/vw/database/users'

export const usePopulateUsers = () => {
    return useQuery({
        queryKey: ['populateusers'],
        queryFn: populateUsers,
    })
}
