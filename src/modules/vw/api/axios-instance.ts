import axios from 'axios'
import type { AxiosInstance } from 'axios'
import {
    SERVER_PROTOCOL,
    SERVER_DOMAIN,
    SERVER_PORT,
    SERVER_PATH,
    SERVER_VERSION,
} from './constants'

export const api: AxiosInstance = axios.create({
    baseURL: `${SERVER_PROTOCOL}${SERVER_DOMAIN}${SERVER_PORT}${SERVER_PATH}${SERVER_VERSION}`,
    headers: {
        'Accept-Language': 'es-ES',
        'Content-Type': 'application/json',
    },
    auth: {
        username: 'admin',
        password: 'admin',
    },
})

export const isAxiosError = axios.isAxiosError
