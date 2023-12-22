import { api } from './axios-instance'
import { handleError } from './utils'
import { MeasurementQuantityDataType } from './types'
import { GET_MEASUREMENT_PARAMS } from './constants'
import { QueryFunctionContext } from '@tanstack/react-query'

export const getMeasurementByIdApi = async ({
    queryKey,
}: QueryFunctionContext) => {
    const [, id] = queryKey

    return await api
        .get<MeasurementQuantityDataType>(
            `${GET_MEASUREMENT_PARAMS}${id as number}`
        )
        .then((response) => response.data)
        .catch((error) => {
            handleError(error)
        })
}
