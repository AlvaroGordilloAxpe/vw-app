import { useQuery } from '@tanstack/react-query'
import {
    populateMeasurements,
    getMeasurements,
} from '@/vw/database/measurements'

export const usePopulateMeasurements = () => {
    return useQuery({
        queryKey: ['populatemeasurements'],
        queryFn: populateMeasurements,
    })
}

export const useGetMeasurements = () => {
    return useQuery({
        queryKey: ['getmeasurements'],
        queryFn: getMeasurements,
    })
}
