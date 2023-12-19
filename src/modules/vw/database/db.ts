import Dexie from 'dexie'
import type { Table } from 'dexie'
import { File, Searches, Test, User, Measurements, Analytics } from './types'

export class VWDatabase extends Dexie {
    users!: Table<User>
    files!: Table<File>
    tests!: Table<Test>
    searches!: Table<Searches>
    measurements!: Table<Measurements>
    analytics!: Table<Analytics>

    constructor() {
        super('vw_db')

        this.version(1).stores({
            users: 'id, email',
            files: 'id',
            tests: 'id',
            searches: 'id',
            measurements: 'id',
            analytics: 'id',
        })
    }
}

export const db = new VWDatabase()
