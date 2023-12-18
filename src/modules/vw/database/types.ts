export type Role = 'admin' | 'user'

export interface ApiSession {
    accessToken: string
    refreshToken?: string
}

export interface User {
    id: string
    name?: string
    email?: string
    image?: string
    role: string
    apiSession?: ApiSession
}

export interface File {
    name: string
    id: string
    description: string
    comment: string
    mimetype: string
}

export interface Test {
    name: string
    id: string
    description: string
    comment: string
    ProjectName: string
    EmissionStandard: string
    VehicleName: string
    Client: string
    JobNumber: string
    CostCenter: string
    Department: string
}

export interface TestEquipment {
    name: string
    id: string
    descrption: string
    comment: string
    ao_file_children: string[]
    type: string
    serialnumber: string
}

export interface UnitUnderTest {
    name: string
    id: string
    descrption: string
    comment: string
    ao_file_children: string
    group: string
}

export interface Measurements {
    name: string
    id: string
    descrption: string
    comment: string
    testid: string
    testequipmentid: string[]
    unitundertestid: string[]
}

export interface MeasurementQuantity {
    name: string
    id: string
    descrption: string
    comment: string
    ao_file_children: string
    value: string
    unit: string
    group: string
    testequipmentid: string
    min: string
    max: string
}

export interface Searches {
    id: string
    name: string
    prompt: string
    result: string
}
