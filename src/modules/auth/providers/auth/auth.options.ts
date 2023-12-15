import { getApiContext } from '@/common/providers/api-context/api-context.default'
import { AuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET as string,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/sign-in',
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            const path = url.replace(baseUrl, '')
            if (path === '/') return `${baseUrl}/vw`

            // Allows relative callback URLs
            if (url.startsWith('/')) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
        async session({ session, token }) {
            if (token?.accessToken && session) {
                // Update server side API_CONTEXT
                getApiContext().setAuthorizationToken(token.accessToken)
                session.apiSession = {
                    accessToken: token.accessToken,
                    refreshToken: token.refreshToken,
                }
            }

            return session
        },
        async jwt({ token, user }) {
            if (user?.apiSession) {
                token.accessToken = user.apiSession.accessToken
                token.refreshToken = user.apiSession.refreshToken
            }

            return token
        },
    },
    providers: [
        CredentialsProvider({
            name: 'custom-credentials',
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' },
            },
            authorize: async (credentials, _req) => {
                // TODO: Connect with login API in the backend
                const user: User = {
                    id: '1',
                    email: 'dpenai@pibone.com',
                    name: 'Dani Peña Iglesias',
                    role: 'admin',
                    // TODO: Set the incoming api token here, if needed
                    apiSession: {
                        accessToken: 'jwt-token',
                        // refreshToken: 'refresh-token-if-any',
                    },
                }

                return credentials?.password === 'safe-password' ? user : null
            },
        }),
    ],
}

/** NOTE: Authorize Method Alternative...
 *
 * authorized({ auth, request: { nextUrl } }) {
    const isLoggedIn = !!auth?.user;
    const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

    if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
    } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
    }

    return true;
   },
 */
