import React, { PropsWithChildren } from 'react'
import styles from './main.module.css'
import cn from 'classnames'

export type MainLayoutProps = PropsWithChildren<{}>

export function VWMainLayout(props: MainLayoutProps) {
    return (
        <div
            data-testid="vw-main-layout"
            className={cn(styles.container, 'bg-neutral-200')}
        >
            {props.children}
        </div>
    )
}
