import { H3Event, getCookie } from 'h3'
import type { Session, User } from 'lucia-auth'
import { SESSION_COOKIE_NAME } from 'lucia-auth'
import { auth } from '../base-auth'

export async function getSessionUser (event: H3Event): Promise<
| { user: User; session: Session }
| {
  user: null
  session: null
}
> {
  try {
    const sessionId = getCookie(event, SESSION_COOKIE_NAME)

    if (!sessionId) { throw new Error('No session cookie') }

    const { user, session } = await auth.validateSessionUser(sessionId)

    // const sessionCookie = auth.createSessionCookie(session)

    // setCookie(event, sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

    return { user, session }
  } catch {
    return {
      session: null,
      user: null
    }
  }
}
