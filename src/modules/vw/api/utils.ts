import { isAxiosError } from './axios-instance'
import { ValidationError } from './types'

export const handleError = (error: unknown) => {
    if (isAxiosError<ValidationError, Record<string, unknown>>(error)) {
        console.log(error.status)
        console.error(error.response)

        return error
    } else {
        console.error(error)
    }
}
