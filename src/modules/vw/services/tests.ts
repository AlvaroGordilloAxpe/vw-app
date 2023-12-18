import { useQuery } from '@tanstack/react-query'
import { populatesTests } from '@/vw/database/tests'

export const usePopulateTests = () => {
    return useQuery({
        queryKey: ['populatetests'],
        queryFn: populatesTests,
    })
}
