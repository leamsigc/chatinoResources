
import prisma from '@lucia-auth/adapter-prisma'
import lucia from 'lucia-auth'

import { baseDbClient } from '.../../../lib/PrismaHelpers'

export const auth = lucia({
  adapter: prisma(baseDbClient), // TODO: initialize Prisma client
  env: process.dev ? 'DEV' : 'PROD',
  transformDatabaseUser: (databaseUser) => {
    return {
      id: databaseUser.id,
      email: databaseUser.email,
      username: databaseUser.username,
      emailVerified: databaseUser.email_verified
    }
  }
})

export type Auth = typeof auth;
