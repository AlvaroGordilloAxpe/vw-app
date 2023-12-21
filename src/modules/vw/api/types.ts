export type ValidationError = {
    message: string
    errors: Record<string, string[]>
}

export type UploadFileFormDataType = {
    metadata?: File
    files?: File[]
}
