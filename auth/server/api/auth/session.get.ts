import type { Session, User } from 'lucia-auth'
import { getSessionUser } from '../../helpers'
import { auth } from '../../../base-auth'

export default defineEventHandler(async (event) => {
  const { user, session } = await getSessionUser(event, auth)
  event.context.user = user
  event.context.session = session
  return { user, session }
})

declare module 'h3' {
  interface H3EventContext {
    user: User | null
    session: Session | null
  }
}
