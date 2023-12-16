import { db } from './db'
import testsJSON from './mocks/tests.json'

export const insertTestsDB = async () => {
    try {
        return await db.tests.bulkPut(testsJSON.data)
    } catch (e) {
        console.error(e)
    }
}
