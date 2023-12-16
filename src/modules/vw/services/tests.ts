import { useQuery } from '@tanstack/react-query'
import { insertTestsDB } from '@/vw/database/tests'

export const useTestsToDB = () => {
    return useQuery({
        queryKey: ['teststodb'],
        queryFn: insertTestsDB,
    })
}
