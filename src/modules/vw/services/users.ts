import { useQuery } from '@tanstack/react-query'
import { insertUsersDB } from '@/vw/database/users'

export const useUsersToDB = () => {
    return useQuery({
        queryKey: ['userstodb'],
        queryFn: insertUsersDB,
    })
}
