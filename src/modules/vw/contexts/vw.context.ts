import { createContext, useContext } from 'react'

type VWContextType = {
    searchID: string
    setSearchID: (id: string) => void
}

const DEFAULT_VW_CONTEXT = Object.freeze({
    searchID: '',
    setSearchID(id: string) {
        console.log(id)
    },
})

export const VWContext = createContext<VWContextType>(DEFAULT_VW_CONTEXT)

export const useVWContext = () => useContext(VWContext)
