import type { User } from 'lucia-auth/auth'

export const useAuth = () => useNuxtApp().$auth

export const authLogin = async ({ email, password }:{email: string, password: string}) => {
  const request = await $fetch('/api/auth/login', {
    method: 'POST',
    body: {
      email,
      password
    }
  })
  await getUser()
  console.log(request)

  useAuth().redirectTo.value = null
  // await useAuth().refresh()
  await navigateTo('/feeds/home')
}

export const authRegister = async (email: string, password: string) => {
  await $fetch('/api/auth/register', {
    method: 'POST',
    body: {
      email,
      password
    }
  })
  return await authLogin({ email, password })
}

export const authLogout = async () => {
  await $fetch('/api/auth/logout', {
    method: 'POST'
  })
  await useAuth().refresh()
}

export const getUser = async (): Promise<Readonly<User> | null> => {
  try {
    const { user } = await $fetch<{ user: User }>('/api/auth/me')
    useUser().value = user
    console.log(user)

    return user
  } catch (error) {
    return null
  }
}
