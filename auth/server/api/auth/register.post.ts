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
    const user = await auth.createUser({
      primaryKey: {
        providerId: 'email',
        providerUserId: email,
        password
      },
      attributes: {
        email,
        username: email,
        email_verified: true,
        role_id: 'admin'
      }
    })

    const session = await auth.createSession(user.id)
    const sessionCookie = auth.createSessionCookie(session)
    setResponseStatus(201)

    return {
      session,
      sessionCookie,
      user
    }
  } catch (e) {
    console.log(e)

    const error = e as Error
    if (error.message === 'AUTH_DUPLICATE_PROVIDER_ID' || error.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email already exists or invalid email'
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Unknown error'
    })
  }
})
