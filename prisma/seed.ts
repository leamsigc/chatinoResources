import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

const userRoles:Role[] = [
  {
    name: 'ADMINISTRATOR',
    id: 'admin'
  },
  {
    name: 'USER',
    id: 'user'
  }
]

async function main () {
  console.log('Start seeding ...')
  for (const u of userRoles) {
    const role = await prisma.role.create({
      data: u
    })
    console.log(`Created user with id: ${role.id}`)
  }
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
