export type ValidationError = {
    message: string
    errors: Record<string, string[]>
}

export type UploadFileFormDataType = {
    metadata?: File
    files?: File[]
}

export type TestsDataType = {
    id: number
    testId: string
    client: string
    description: string
    comment: string
    name: string
    costCenter: string
    department: string
    emissionStandard: string
    jobNumber: string
    projectName: string
    vehicleName: string
    measurementQuantityList?: MeasurementQuantityDataType[]
}

export type QuantityListDataType = {
    id: number
    value: string
    dateTime: string
}

export type MeasurementQuantityDataType = {
    id: number
    measurementQuantityId: string
    fileChildren: string
    description: string
    comment: string
    name: string
    group: string
    max: string
    min: string
    testEquipmentId: string
    unit: string
    value: string
    quantityList?: QuantityListDataType[]
}

export type TestsDataResponse = {
    testDataList: TestsDataType[]
}
