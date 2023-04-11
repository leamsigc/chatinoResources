import lucia from 'lucia-auth'
import prisma from '@lucia-auth/adapter-prisma'
import { prismaClient } from '@prisma/client'

export const auth = lucia({
  adapter: prisma(prismaClient), // TODO: initialize Prisma client
  env: 'DEV' // "PROD" if in prod
})

export type Auth = typeof auth;
