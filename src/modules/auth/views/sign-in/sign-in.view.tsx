import React from 'react'
import styles from './sign-in.module.css'
import cn from 'classnames'
import { LoginWidget } from '../../widgets/login'
import * as Card from '@/common/components/ui/card'

type SignInViewProps = {
    // query parameters
    searchParams: { [key: string]: string | string[] | undefined }
    // url parameters
    params: { [key: string]: string | undefined }
}

export function SignInView(props: SignInViewProps) {
    return (
        <div
            className={cn(
                styles.container,
                'flex justify-center items-center bg-neutral-200'
            )}
        >
            <Card.Root className="w-1/4 bg-neutral-50">
                <Card.Header>
                    <Card.Title>Account Sign In</Card.Title>
                    <Card.Description>
                        Enter your email and password to sign in your account.
                    </Card.Description>
                </Card.Header>
                <Card.Content>
                    <LoginWidget />
                </Card.Content>
            </Card.Root>
        </div>
    )
}
