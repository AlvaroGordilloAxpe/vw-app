import styles from './header.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AccountWidget } from '@/auth/widgets/account'
import * as Tooltip from '@/common/components/ui/tooltip'
import logoPic from '@/common/assets/logo.png'
import { usePathname } from 'next/navigation'
import { VWNavMenuWidget } from '@/vw/widgets/nav-menu'
import { useSession } from 'next-auth/react'

export type HeaderWidgetProps = {}

const ROO_PATHNAME = 'vw'
const SESSION_LOGGED = 'authenticated'

export function HeaderWidget(props: HeaderWidgetProps) {
    const session = useSession()
    const path = usePathname()

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

            {session.status === SESSION_LOGGED &&
                path.includes(ROO_PATHNAME) && <VWNavMenuWidget />}

            <AccountWidget className={styles.account} />
        </div>
    )
}
