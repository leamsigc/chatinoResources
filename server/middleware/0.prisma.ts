import { PrismaClient } from '@prisma/client'
import { baseDbClient } from '~~/lib/PrismaHelpers'

let prisma: PrismaClient
declare module 'h3' {
  interface H3EventContext {
    prisma: PrismaClient
  }
}

export default eventHandler((event) => {
  if (!prisma) {
    prisma = baseDbClient
  }
  event.context.prisma = prisma
})
