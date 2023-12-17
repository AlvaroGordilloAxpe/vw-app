import { db } from './db'
import { filesJSON } from './mocks'

export const insertFilesDB = async () => {
    try {
        return await db.files.bulkPut(filesJSON.data)
    } catch (e) {
        console.error(e)
    }
}

export const getFiles = async () => {
    try {
        return await db.files.toArray()
    } catch (e) {
        console.error(e)
    }
}

export const getFileById = async (id: string) => {
    try {
        return await db.files.get(id)
    } catch (e) {
        console.error(e)
    }
}
