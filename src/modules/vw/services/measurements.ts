import { useQuery } from '@tanstack/react-query'
import {
    populateMeasurements,
    getMeasurements,
} from '@/vw/database/measurements'
import { getMeasurementByIdApi } from '../api'

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

export const useGetMeasurementById = (id: number) => {
    return useQuery({
        queryKey: ['getmeasurementbyid', id],
        queryFn: getMeasurementByIdApi,
    })
}
