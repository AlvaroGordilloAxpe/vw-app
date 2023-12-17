import styles from './header.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AccountWidget } from '@/auth/widgets/account'
import * as Tooltip from '@/common/components/ui/tooltip'
import logoPic from '@/common/assets/logo.png'

export type HeaderWidgetProps = {}

export function HeaderWidget(props: HeaderWidgetProps) {
    return (
        <div data-testid="header-widget" className={styles.container}>
            <Link href="/vw" className={styles.logo}>
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger>
                            <Image
                                src={logoPic}
                                alt="company_logo"
                                width={200}
                                height={25}
                                priority
                            />
                        </Tooltip.Trigger>
                        <Tooltip.Content>Go Main Menu</Tooltip.Content>
                    </Tooltip.Root>
                </Tooltip.Provider>
            </Link>
            <AccountWidget className={styles.account} />
        </div>
    )
}
