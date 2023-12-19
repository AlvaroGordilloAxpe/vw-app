import { useQuery } from '@tanstack/react-query'
import {
    populateAnalytics,
    getAnalytics,
    getAnalyticById,
} from '@/vw/database/analytics'

export const usePopulateAnalytics = () => {
    return useQuery({
        queryKey: ['populateanalytics'],
        queryFn: populateAnalytics,
    })
}

export const useGetAnalytics = () => {
    return useQuery({
        queryKey: ['getanalytics'],
        queryFn: getAnalytics,
    })
}

export const useGetAnalyticById = (id: string) => {
    return useQuery({
        queryKey: ['getfilebyid', id],
        queryFn: getAnalyticById,
    })
}
