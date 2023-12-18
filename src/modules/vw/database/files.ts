import { db } from './db'
import { filesJSON } from './mocks'
import { QueryFunctionContext } from '@tanstack/react-query'

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

export const getFileById = async ({ queryKey }: QueryFunctionContext) => {
    const [, id] = queryKey

    try {
        if (id !== '0') return await db.files.get(id as string)

        return null
    } catch (e) {
        console.error(e)
    }
}
