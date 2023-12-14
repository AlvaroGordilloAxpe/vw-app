import React from 'react'
import styles from './app-main.module.css'
import { MainWidget } from '@/common/widgets/main'

export function AppMainView() {
    return (
        <div data-testid="app-main-view" className={styles.container}>
            <MainWidget />
        </div>
    )
}
