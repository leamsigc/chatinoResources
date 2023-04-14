import { PrismaClient } from '@prisma/client'
import prisma from '@lucia-auth/adapter-prisma'
import lucia from 'lucia-auth'

export const auth = lucia({
  adapter: prisma(new PrismaClient()), // TODO: initialize Prisma client
  env: 'DEV' // "PROD" if in prod
})

export type Auth = typeof auth;
