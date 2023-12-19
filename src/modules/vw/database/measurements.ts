import { db } from './db'
import { measurementsJSON } from './mocks'

export const populateMeasurements = async () => {
    try {
        return await db.measurements.bulkPut(measurementsJSON.data)
    } catch (e) {
        console.error(e)
    }
}

export const getMeasurements = async () => {
    try {
        return await db.measurements.toArray()
    } catch (e) {
        console.error(e)
    }
}
