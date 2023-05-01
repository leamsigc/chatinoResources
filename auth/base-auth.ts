import { PrismaClient } from '@prisma/client'
import prisma from '@lucia-auth/adapter-prisma'
import lucia from 'lucia-auth'

import type { User } from 'lucia-auth'

export const auth = lucia({
  adapter: prisma(new PrismaClient()), // TODO: initialize Prisma client
  env: 'DEV', // "PROD" if in prod,
  transformDatabaseUser: (databaseUser) => {
    return {
      id: databaseUser.id,
      email: databaseUser.email,
      name: databaseUser.name
    }
  }
})

export type Auth = typeof auth;
