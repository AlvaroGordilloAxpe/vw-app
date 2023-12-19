import Dexie from 'dexie'
import type { Table } from 'dexie'
import { File, Searches, Test, User, Measurements } from './types'

export class VWDatabase extends Dexie {
    users!: Table<User>
    files!: Table<File>
    tests!: Table<Test>
    searches!: Table<Searches>
    measurements!: Table<Measurements>

    constructor() {
        super('vw_db')

        this.version(1).stores({
            users: 'id, email',
            files: 'id, name',
            tests: 'id, name',
            searches: 'id, name',
            measurements: 'id, name',
        })
    }
}

export const db = new VWDatabase()
