import { db } from './db'
import { testsJSON } from './mocks'

export const populatesTests = async () => {
    try {
        return await db.tests.bulkPut(testsJSON.data)
    } catch (e) {
        console.error(e)
    }
}

export const getTests = async () => {
    try {
        return await db.tests.toArray()
    } catch (e) {
        console.error(e)
    }
}
