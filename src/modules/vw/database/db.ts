import Dexie from 'dexie'
import type { Table } from 'dexie'
import { File, Test } from './types'

export class VWDB extends Dexie {
    files!: Table<File>
    tests!: Table<Test>

    constructor() {
        super('vw_db')

        this.version(1).stores({
            files: 'id',
            tests: 'id',
        })
    }
}

export const db = new VWDB()
