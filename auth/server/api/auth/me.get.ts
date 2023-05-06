import type { Session, User } from 'lucia-auth'
import { getSessionUser } from '../../helpers'
import { auth } from '../../../base-auth'

export default defineEventHandler(async (event) => {
  const { user } = await getSessionUser(event, auth)
  event.context.user = user
  if (user?.id) {
    const authUser = await auth.getUser(user?.id)
    return { user: authUser }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'Please login or register to continue.'
    })
  }
})

declare module 'h3' {
  interface H3EventContext {
    user: User | null
    session: Session | null
  }
}
