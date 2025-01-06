import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { cookies } from "next/headers";

export const authOption = {
    cookies: {
        sessionToken: {
          name: `__Secure-next-auth.session-token`,
          options: {
            httpOnly: true, // Cookie hanya bisa diakses oleh server
            secure: process.env.NODE_ENV === 'production', // Cookie hanya dikirim lewat HTTPS di produksi
            sameSite: 'lax', // Batasan cookie untuk permintaan lintas situs
            path: '/', // Cookie tersedia di seluruh rute
          },
        },
        csrfToken: {
          name: `__Host-next-auth.csrf-token`,
          options: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
          },
        },
      },
      
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],

    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOption)

export {handler as GET, handler as POST}