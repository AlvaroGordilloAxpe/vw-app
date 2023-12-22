import { PropsWithChildren, useState } from 'react'
import { VWContext } from './vw.context'

export const VWProvider = ({ children }: PropsWithChildren) => {
    const [searchID, setSearchID] = useState<number>(1)

    return (
        <VWContext.Provider value={{ searchID, setSearchID }}>
            {children}
        </VWContext.Provider>
    )
}
