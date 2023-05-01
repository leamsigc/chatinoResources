import { H3Event, getCookie } from 'h3'
import type { Session, User } from 'lucia-auth'
import { SESSION_COOKIE_NAME } from 'lucia-auth'
import { Auth } from '~~/base-auth'

export async function getSessionUser (event: H3Event, auth: Auth): Promise<
| { user: User; session: Session }
| {
  user: null
  session: null
}
> {
  try {
    const sessionId = getCookie(event, SESSION_COOKIE_NAME)
    console.log('sessionId', sessionId)

    if (!sessionId) { throw new Error('No session cookie') }

    const session = await auth.validateSession(sessionId)
    console.log('session', session)

    const sessionCookie = auth.createSessionCookie(session)
    console.log('sessionCookie', sessionCookie)

    const user = await auth.getSessionUser(session.sessionId)
    setCookie(event, sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

    return user
  } catch {
    return {
      session: null,
      user: null
    }
  }
}
