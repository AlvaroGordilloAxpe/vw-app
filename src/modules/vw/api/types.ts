export type ValidationError = {
    message: string
    errors: Record<string, string[]>
}

export type UploadFileFormDataType = {
    metadata?: File | undefined
    xmldats?: FileList | undefined
}
