import { useUser } from '@/auth/composables/useUser'

export default defineNuxtRouteMiddleware(() => {
  const user = useUser()

  if (!user.value) { return navigateTo('/auth/login') }
})
