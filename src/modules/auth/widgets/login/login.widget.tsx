import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { AuthForm } from '../../components/auth-form'
import styles from './login.module.css'
import { usePopulateUsers } from '@/vw/services'

export type LoginWidgetProps = {}

export function LoginWidget(props: LoginWidgetProps) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/vw'
    usePopulateUsers()

    return (
        <div data-testid="login-widget" className={styles.container}>
            <AuthForm
                onSubmit={async (credentials) => {
                    const result = await signIn('credentials', {
                        redirect: false,
                        ...credentials,
                        callbackUrl,
                    })

                    if (result?.error === 'CredentialsSignin') {
                        return 'Invalid credentials'
                    }

                    router.replace(callbackUrl)
                }}
            />
        </div>
    )
}

// NOTE (1) Alternative way in https://nextjs.org/learn/dashboard-app/adding-authentication
// NOTE (2) Example redirect method (alternative way)
/*
import { redirect } from 'next/navigation';

revalidatePath(callbackUrl);
redirect(callbackUrl);
*/
// NOTE (3) Alternative use of hook "useUsersToDB"
// const { data, error, isFetching, isLoading } = useUsersToDB()
