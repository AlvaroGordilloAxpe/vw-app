import { db } from './db'
import { searchesJSON } from './mocks'
import { QueryFunctionContext } from '@tanstack/react-query'

export const populteSearches = async () => {
    try {
        return await db.searches.bulkPut(searchesJSON.data)
    } catch (e) {
        console.error(e)
    }
}

export const getSearches = async () => {
    try {
        return await db.searches.toArray()
    } catch (e) {
        console.error(e)
    }
}

export const getSearchById = async ({ queryKey }: QueryFunctionContext) => {
    const [, id] = queryKey

    try {
        return await db.searches.get(id as number)
    } catch (e) {
        console.error(e)
    }
}

export const deleteSearchById = async ({ queryKey }: QueryFunctionContext) => {
    const [, id] = queryKey

    try {
        return await db.searches.delete(id as number)
    } catch (e) {
        console.error(e)
    }
}
