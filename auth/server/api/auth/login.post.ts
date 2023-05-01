import { auth } from './../../../base-auth'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody<{ email: string; password: string }>(event)

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'email and password is invalid'
    })
  }

  try {
    const user = await auth.useKey('email', email, password)
    const session = await auth.createSession(user.userId)
    const sessionCookie = auth.createSessionCookie(session)

    setCookie(event, sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

    return {
      session,
      sessionCookie,
      user
    }
  } catch (e) {
    const error = e as Error

    if (error.message === 'AUTH_INVALID_PROVIDER_ID' || error.message === 'AUTH_INVALID_PASSWORD') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Username and password is incorrect'
      })
    }

    throw createError({
      statusCode: 404,
      statusMessage: 'Not found'
    })
  }
})
