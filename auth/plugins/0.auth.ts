import type { User, Session } from 'lucia-auth'

export default defineNuxtPlugin(async (nuxtApp) => {
  // Skip plugin when rendering error page
  if (nuxtApp.payload.error) {
    return {}
  }

  const { data, refresh } =
   await useFetch<{session:Session, user:User}>('/api/auth/session')
  const user = useUser()

  const loggedIn: any = computed(() => !!data.value?.user?.id)

  // Create a ref to know where to redirect the user when logged in
  const redirectTo = useState('authRedirect')

  /**
   * Add global route middleware to protect pages using:
   *
   * definePageMeta({
   *  auth: true
   * })
   */
  //

  addRouteMiddleware(
    'auth',
    (to) => {
      if (to.meta.auth && !loggedIn.value) {
        redirectTo.value = to.path
        return '/auth/login'
      }
    },
    { global: true }
  )

  const currentRoute = useRoute()

  if (process.client) {
    watch(loggedIn, async (loggedIn) => {
      if (!loggedIn && currentRoute.meta.auth) {
        redirectTo.value = currentRoute.path
        await navigateTo('/auth/login')
      }
      if (loggedIn.value && data.value?.user) {
        user.value = data.value.user
      }
    })
  }

  if (loggedIn.value && currentRoute.path === '/auth/login') {
    await navigateTo(redirectTo.value || '/feeds/home')
  }

  return {
    provide: {
      auth: {
        loggedIn,
        session: data.value?.session,
        redirectTo,
        refresh
      }
    }
  }
})
