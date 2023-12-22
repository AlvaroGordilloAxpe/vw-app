import { api } from './axios-instance'
import { handleError } from './utils'
import {
    TestsDataType,
    MeasurementQuantityDataType,
    TestsDataResponse,
} from './types'
import { GET_TESTS, GET_TEST_PARAMS } from './constants'
import { QueryFunctionContext } from '@tanstack/react-query'

export const getTestsApi = async () => {
    return await api
        .get<TestsDataResponse>(`${GET_TESTS}`)
        .then(({ data }) => data.testDataList)
        .catch((error) => {
            handleError(error)
        })
}

export const getTestByIdApi = async ({ queryKey }: QueryFunctionContext) => {
    const [, id] = queryKey

    return await api
        .get<TestsDataType>(`${GET_TEST_PARAMS}${id as number}`)
        .then((response) => response.data)
        .catch((error) => {
            handleError(error)
        })
}

export const getMeasurentsByTestNameApi = async (name: string) => {
    return await api
        .get<TestsDataResponse>(`${GET_TESTS}?testName=${name}`)
        .then(({ data }) =>
            Promise.all(
                data.testDataList.map((t) =>
                    api
                        .get<TestsDataType>(`${GET_TEST_PARAMS}${t.id}`)
                        .then((response) => response.data)
                )
            )
        )
        .then(mapTestToMeasurementsArray)
        .catch((error) => {
            handleError(error)
        })
}

function mapTestToMeasurementsArray(testArray: TestsDataType[]) {
    return testArray.reduce((acc, curr) => {
        if (!curr.measurementQuantityList) return acc
        acc.push(...curr.measurementQuantityList)
        return acc
    }, [] as MeasurementQuantityDataType[])
}
