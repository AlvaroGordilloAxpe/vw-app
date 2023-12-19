import { db } from './db'
import { searchesJSON } from './mocks'

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
