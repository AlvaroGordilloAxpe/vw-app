import React, { PropsWithChildren } from 'react'
import styles from './main.module.css'

export type MainLayoutProps = PropsWithChildren<{}>

export function VWMainLayout(props: MainLayoutProps) {
    return (
        <div data-testid="vw-main-layout" className={styles.container}>
            {props.children}
        </div>
    )
}
