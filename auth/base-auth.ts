
import prisma from '@lucia-auth/adapter-prisma'
import lucia from 'lucia-auth'

import { baseDbClient } from '.../../../lib/PrismaHelpers'

export const auth = lucia({
  adapter: prisma(baseDbClient), // TODO: initialize Prisma client
  env: 'DEV', // "PROD" if in prod,
  transformDatabaseUser: (databaseUser) => {
    return {
      id: databaseUser.id,
      email: databaseUser.email,
      username: databaseUser.username
    }
  }
})

export type Auth = typeof auth;
