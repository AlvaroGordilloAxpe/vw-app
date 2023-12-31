import { db } from './db'
import { usersJSON } from './mocks'
import { User } from './types'

export const populateUsers = async () => {
    try {
        return await db.users.bulkPut(usersJSON.data)
    } catch (e) {
        console.error(e)
    }
}

export const getUserLogin = async (email: string) => {
    try {
        return await db.users.where('email').equalsIgnoreCase(email).first()
    } catch (e) {
        console.error(e)
    }
}

export const updateUser = async (user: User) => {
    try {
        return await db.users.put(user)
    } catch (e) {
        console.error(e)
    }
}
