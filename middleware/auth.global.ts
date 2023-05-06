
export default defineNuxtRouteMiddleware((to) => {
  const user = useAuth()

  if (to.name === 'auth-login' && user.loggedIn) {
    return navigateTo('/feeds/home')
  }
  if (!user.loggedIn && to.meta.auth && to.name !== 'auth-login') {
    return navigateTo('/auth/login')
  }
})
