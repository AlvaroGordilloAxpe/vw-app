import React from 'react'
import styles from './app-main.module.css'
import Image from 'next/image'
import companyPic from '@/common/assets/back.jpg'

export function AppMainView() {
    return (
        <div data-testid="app-main-view" className={styles.container}>
            <Image
                src={companyPic}
                alt="company_logo"
                width="0"
                height="0"
                sizes="88vw"
                className="w-auto h-auto ml-auto mr-auto"
                priority
            />
        </div>
    )
}
