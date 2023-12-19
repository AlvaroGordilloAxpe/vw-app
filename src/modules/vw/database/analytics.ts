import { db } from './db'
import { analyticsJSON } from './mocks'
import { QueryFunctionContext } from '@tanstack/react-query'

export const populateAnalytics = async () => {
    try {
        return await db.analytics.bulkPut(analyticsJSON.metrics)
    } catch (e) {
        console.error(e)
    }
}

export const getAnalytics = async () => {
    try {
        return await db.analytics.toArray()
    } catch (e) {
        console.error(e)
    }
}

export const getAnalyticById = async ({ queryKey }: QueryFunctionContext) => {
    const [, id] = queryKey

    try {
        if (id !== '0') return await db.analytics.get(id as string)

        return null
    } catch (e) {
        console.error(e)
    }
}
