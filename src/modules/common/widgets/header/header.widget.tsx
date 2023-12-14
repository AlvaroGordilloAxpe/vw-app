import styles from './header.module.css'
import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AccountWidget } from '@/auth/widgets/account'
import * as Tooltip from '@/common/components/ui/tooltip'

export type HeaderWidgetProps = {}

export function HeaderWidget(props: HeaderWidgetProps) {
    const path = usePathname()
    const root = '/'

    return (
        <div
            data-testid="header-widget"
            className={cn(styles.container, path !== root && 'border-b')}
        >
            <Link href="/" className={styles.logo}>
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger>
                            <Image
                                src="/vw/logo.png"
                                alt="company_logo"
                                width={200}
                                height={25}
                                priority
                            />
                        </Tooltip.Trigger>
                        <Tooltip.Content>Go Home</Tooltip.Content>
                    </Tooltip.Root>
                </Tooltip.Provider>
            </Link>
            <AccountWidget className={styles.account} />
        </div>
    )
}
