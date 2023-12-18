import { db } from './db'
import { searchesJSON } from './mocks'

export const populteSearches = async () => {
    try {
        return await db.searches.bulkPut(searchesJSON.data)
    } catch (e) {
        console.error(e)
    }
}
