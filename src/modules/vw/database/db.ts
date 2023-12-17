import Dexie from 'dexie'
import type { Table } from 'dexie'
import { File, Test, User } from './types'

export class VWDatabase extends Dexie {
    users!: Table<User>
    files!: Table<File>
    tests!: Table<Test>

    constructor() {
        super('vw_db')

        this.version(1).stores({
            users: 'id, email',
            files: 'id',
            tests: 'id',
        })
    }
}

export const db = new VWDatabase()
