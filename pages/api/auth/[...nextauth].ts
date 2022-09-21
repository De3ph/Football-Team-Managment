import NextAuth, { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@lib/prisma"
import GoogleProvider from "next-auth/providers/google"

const clientId: string = process.env.GOOGLE_CLIENT_ID as string
const clientSecret: string = process.env.GOOGLE_CLIENT_SECRET as string

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      name: "google",
      clientId,
      clientSecret
    })
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database"
  }
}

export default NextAuth(authOptions)
