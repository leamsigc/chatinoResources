import { SESSION_COOKIE_NAME } from 'lucia-auth'
import { auth } from '../../../base-auth'
import { getSessionUser } from '../../helpers'

export default defineEventHandler(async (event) => {
  const { session } = await getSessionUser(event)

  if (session) {
    await auth.invalidateSession(session.sessionId)
    await auth.deleteDeadUserSessions(session.sessionId)
    auth.createSessionCookie(null)

    setCookie(event, SESSION_COOKIE_NAME, '')
  }
  return {
    status: 200
  }
})
