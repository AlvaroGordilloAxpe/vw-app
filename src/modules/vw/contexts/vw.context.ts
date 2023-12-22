import { createContext, useContext } from 'react'

type VWContextType = {
    searchID: number
    setSearchID: (id: number) => void
}

const DEFAULT_VW_CONTEXT = Object.freeze({
    searchID: 1,
    setSearchID(id: number) {
        console.log(id)
    },
})

export const VWContext = createContext<VWContextType>(DEFAULT_VW_CONTEXT)

export const useVWContext = () => useContext(VWContext)
